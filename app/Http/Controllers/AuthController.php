<?php

namespace App\Http\Controllers;
use App\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginView()
    {
        return view('auth.login');
    }

    public function registerView()
    {
        return view('auth.register');
    }


    public function obfuscate_email($email)
    {
        $em   = explode("@",$email);
        $name = implode('@',array_slice($em, 0, count($em)-1));
        $len  = floor(strlen($name)/2);

        return substr($name,0, $len) . str_repeat('*', $len) . "@" . end($em);
    }

    public function password(Request $request)
    {
        $request->validate([
            'old_password' => ['required','current_password'],
            'password' => ['required', 'string', 'min:8', 'max:20' ,  'confirmed'],
        ],[
            'old_password.current_password' => 'Your old password is wrong'
        ]);

        /** @var User $user */
        $user = auth()->user();

        $user->update([
            'password_reset' => null,
            'password' => Hash::make($request->get('password'))
        ]);

        return api()->message('Password Updated')->build();

    }

    public function maskPhoneNumber($number)
    {
        return str_repeat("*", strlen($number)-4) . substr($number, -4);
    }


    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function login(Request $request)
    {

        $request->validate([
            'email' => [ 'required' , 'email'],
            'password' => 'required',
        ]);

        /** @var User $user */
        $user = User::query()->where('email' , '=' , $request->get('email'))->first();


        // Check if User Exists

        if ($user)
        {
            // Check if user password matches

            if (Hash::check($request->get('password'), $user->password))
            {
                if(!$user->require_otp)
                {
                    Auth::loginUsingId($user->id);
                    Auth::logoutOtherDevices($request->get('password'));
                    return  api()->success(true)->data('otp', false)->build('Welcome Back , ' . $user->name );
                }

                $otp = config('app.env') == 'local' ? 123456 :  random_int(100000 , 999999);
                $message = 'Your OTP Sent to ' . $this->obfuscate_email($user->email) . ' and ' . $this->maskPhoneNumber( $user->phone);

                $user->update([
                    'otp' => Hash::make($otp),
                    'otp_expiry' => now()->addMinutes(60)
                ]);

//                $this->dispatch(new SendEmailOTP($user->email , $otp));
//                $this->dispatch(new SendSMSOTP($user->phone , $otp));

                return  api()->success(true)->data('otp', true)->build($message);
            }
        }

        return api()->success(false)->build('Your login credentials are incorrect or OTP');
    }

    public function loginOTP(Request $request)
    {

        $request->validate([
            'email' => [ 'required' , 'email'],
            'password' => 'required',
            'otp' => 'required',
        ]);

        /** @var User $user */
        $user = User::query()->where('email' , '=' , $request->get('email'))->first();


        // Check if User Exists

        if ($user)
        {
            // Check if user password matches

            if (Hash::check($request->get('password'), $user->password))
            {
                // check if user otp matches

                if (Hash::check($request->get('otp'), $user->otp))
                {
                    // check if otp is still valid

                    if ($user->otp_expiry >= now())
                    {
                        Auth::loginUsingId($user->id);
                        return  api()->success(true)->build('Welcome Back , ' . $user->name );
                    }

                    return api()->success(false)->build('OTP expired , request new OTP');
                }
            }
        }

        return api()->success(false)->build('Your login credentials are incorrect or OTP');
    }


    public function register(Request $request)
    {

        $request->validate([
            'name' => [ 'required'],
            'last_name' => [ 'required'],
            'email' => [ 'required' , 'email' , 'unique:users'],
            'phone' => [ 'required' , 'starts_with:263' , 'digits:12'],
            'password' => ['required' , 'confirmed' , 'min:8'],
        ]);

        /** @var User $user */
        $user = User::query()->create([
            'name' => $request->get('name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
            'phone' => $request->get('phone'),
            'status' =>  true,
            'password' => Hash::make($request->get('password')),
        ]);

        Auth::loginUsingId($user->id);
        return  api()->success(true)->build('Welcome Back , ' . $user->name );

    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

    public function getResetForm()
    {
       return view('auth.reset');
    }


    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function reset(Request $request)
    {
        $request->validate([
            'email' => [ 'required' , 'email'],
        ]);

        /** @var User $user */
        $user = User::query()->where('email' , '=' , $request->get('email'))->first();

        if ($user)
        {
                $reset = config('app.env') == 'local' ? 123456 :  random_int(100000 , 999999);
                $message = 'Your password reset Token Sent to ' . $this->obfuscate_email($user->email);
                $user->update([
                    'password_reset_token' => Hash::make($reset),
                    'password_reset_token_expiry' => now()->addHour()
                ]);

//                $this->dispatch(new SendEmailResetToken($user->email , $reset));
//                $this->dispatch(new SendEmailResetToken($user->email , $reset));

                return api()->success(true)->build($message);

        }

        return api()->success(false)->build('Invalid Credentials');
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => [ 'required' , 'email'],
            'token' => 'required',
        ]);

        /** @var User $user */
        $user = User::query()->where('email' , '=' , $request->get('email'))->first();

        // Check if User Exists

        if ($user)
        {
            // check if user otp matches

            if (Hash::check($request->get('token'), $user->password_reset_token))
            {
                // check if otp is still valid

                if ($user->password_reset_token_expiry >= now())
                {
                    $request->validate([
                        'password' => ['required', 'string', 'min:8', 'max:20' ,  'confirmed']
                    ]);

                    $user->update([
                        'password' => Hash::make($request->get('password')),
                        'password_reset' => null
                    ]);
                    return  api()->success(true)->build('Password was changed Successfully');
                }

                return api()->success(false)->build('Token expired , request new Token');
            }
        }

        return api()->success(false)->build('Invalid Email or Token');
    }

    public function getChangeForm()
    {
        return view('auth.change');
    }

//    public function obfuscate_email($email)
//    {
//        $em   = explode("@",$email);
//        $name = implode('@',array_slice($em, 0, count($em)-1));
//        $len  = floor(strlen($name)/2);
//
//        return substr($name,0, $len) . str_repeat('*', $len) . "@" . end($em);
//    }
//
//    public function maskPhoneNumber($number)
//    {
//        return str_repeat("*", strlen($number)-4) . substr($number, -4);
//    }


    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function otp(Request $request)
    {
        $request->validate([
            'email' => [ 'required' , 'email'],
            'password' => 'required'
        ]);

        /** @var User $user */
        $user = User::query()->where('email' , '=' , $request->get('email'))->first();

        if ($user)
        {
            if (Hash::check($request->get('password'), $user->password))
            {
                if ($user->status)
                {
                    $otp = config('app.env') == 'local' ? 123456 :  random_int(100000 , 999999);
                    $message = 'Your OTP Sent to ' . $this->obfuscate_email($user->email) . ' and ' . $this->maskPhoneNumber( $user->phone);
                    $user->update([
                        'otp' => Hash::make($otp),
                        'otp_expiry' => now()->addMinutes(20)
                    ]);
                    $this->dispatch(new SendEmailOTP($user->email , $otp));
                    $this->dispatch(new SendSMSOTP($user->phone , $otp));

                    return api()->success(true)->build($message);
                }

                return api()->success(false)->build('Your account is disabled');
            }
        }

        event(new LoginAttemptEvent($request->get('email')));

        return api()->success(false)->build('Your login credentials are incorrect');
    }

//    public function login(Request $request)
//    {
//
//        $request->validate([
//            'email' => [ 'required' , 'email'],
//            'password' => 'required',
//            'otp' => 'required',
//        ]);
//
//        /** @var User $user */
//        $user = User::query()->where('email' , '=' , $request->get('email'))->first();
//
//
//        // Check if User Exists
//
//        if ($user)
//        {
//            // Check if user password matches
//
//            if (Hash::check($request->get('password'), $user->password))
//            {
//                // check if user otp matches
//
//                if (Hash::check($request->get('otp'), $user->otp))
//                {
//                    // check if otp is still valid
//
//                    if ($user->otp_expiry >= now())
//                    {
//                        Auth::loginUsingId($user->id);
//                        Auth::logoutOtherDevices($request->get('password'));
//                        event(new LoginSuccessEvent($user));
//                        return  api()->success(true)->build('Welcome Back , ' . $user->full_name );
//                    }
//
//                    return api()->success(false)->build('OTP expired , request new OTP');
//                }
//            }
//        }
//
//        return api()->success(false)->build('Your login credentials are incorrect or OTP');
//    }
//
//    public function logout(Request $request)
//    {
//        Auth::logout();
//        $request->session()->invalidate();
//        $request->session()->regenerateToken();
//        session()->remove('current_context_id');
//        return redirect('/login');
//    }
//
//    public function getResetForm()
//    {
//        return view('auth.reset');
//    }
//
//
//    /**
//     * @param Request $request
//     * @return JsonResponse
//     * @throws Exception
//     */
//    public function reset(Request $request)
//    {
//        $request->validate([
//            'email' => [ 'required' , 'email'],
//        ]);
//
//        /** @var User $user */
//        $user = User::query()->where('email' , '=' , $request->get('email'))->first();
//
//        if ($user)
//        {
//            $reset = random_int(100000 , 999999);
//            $message = 'Your password reset Token Sent to ' . $this->obfuscate_email($user->email) . ' and ' . $this->maskPhoneNumber( $user->phone);
//            $user->update([
//                'password_reset_token' => Hash::make($reset),
//                'password_reset_token_expiry' => now()->addHour()
//            ]);
//
//            $this->dispatch(new SendEmailResetToken($user->email , $reset));
//            $this->dispatch(new SendSMSResetToken($user->phone , $reset));
//
//            return api()->success(true)->build($message);
//
//        }
//
//        return api()->success(false)->build('Invalid Credentials');
//    }
//
//    public function resetPassword(Request $request)
//    {
//
//        $request->validate([
//            'email' => [ 'required' , 'email'],
//            'token' => 'required',
//        ]);
//
//        /** @var User $user */
//        $user = User::query()->where('email' , '=' , $request->get('email'))->first();
//
//        // Check if User Exists
//
//        if ($user)
//        {
//            // check if user otp matches
//
//            if (Hash::check($request->get('token'), $user->password_reset_token))
//            {
//                // check if otp is still valid
//
//                if ($user->password_reset_token_expiry >= now())
//                {
//                    $request->validate([
//                        'password' => ['required', 'string', 'min:8', 'max:20' ,  'confirmed' , 'regex:/[a-z]/','regex:/[A-Z]/','regex:/[0-9]/','regex:/[@$!%*#?&]/' ,'password_history_id:' . $user->id ]
//                    ]);
//
//                    $user->update([
//                        'password' => Hash::make($request->get('password')),
//                        'password_reset' => null
//                    ]);
//                    return  api()->success(true)->build('Password was changed Successfully');
//                }
//
//                return api()->success(false)->build('Token expired , request new Token');
//            }
//        }
//
//        return api()->success(false)->build('Invalid Email or Token');
//    }

}
