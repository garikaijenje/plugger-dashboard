<template>

    <div class="sign">
        <div class="sign__content">
            <!-- authorization form -->
            <form @submit.prevent="runForm" ac class="sign__form">
                <a href="/" class="sign__logo">
                    <img src="/images/plugger-logo-1-white.png" alt="">
                </a>

                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                    {{ message }}
                </p>

                <div class="sign__group">
                    <label class="text-white small">Email address</label>
                    <input type="text" v-model="form.email" name="email" :class="[ 'sign__input' , form.errors.get('email') ? 'is-invalid' : '' ]" placeholder="Enter your email" autocomplete="unique-1">
                    <div v-text="form.errors.get('email')" class="main__table-text--red small"/>
                </div>

                <div class="sign__group">
                    <label class="text-white small">Password</label>
                    <input type="password" v-model="form.password" name="password" :class="[ 'sign__input' , form.errors.get('password') ? 'is-invalid' : '' ]"  placeholder="Enter your password" autocomplete="unique-2">
                    <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                </div>

                <div v-if="otp" class="sign__group">
                    <label class="text-white small">OTP</label>
                    <input type="password" v-model="form.otp" name="otp" :class="[ 'sign__input' , form.errors.get('otp') ? 'is-invalid' : '' ]"  placeholder="Enter your OTP" autocomplete="unique-2">
                    <div v-text="form.errors.get('otp')" class="main__table-text--red small"/>
                </div>

                <button  @click.prevent="runForm" :class="['sign__btn' , form.loading || loading ? 'btn-loading' : '']" type="button">Sign in</button>

                <span class="sign__delimiter">or</span>

                <span class="sign__text">Don't have an account? <a href="/register">Register!</a></span>

                <span class="sign__text"><a href="/reset">Forgot password?</a></span>
            </form>
        </div>
    </div>
</template>

<script>
    import Form from "../../core/forms/form";

    export default {
        name: "login",
        data()
        {
            return {
                loading : false,
                error : false,
                otp : false,
                otpLeg : false,
                message : '',
                form : new Form({
                   email : '',
                   password  :'',
                    otp  :'',
                })
            };
        },
        methods : {
            runForm()
            {
                if (!this.otpLeg)
                {
                    this.loginUser();
                }  else {
                    this.loginOTPUser();
                }
            },
            loginUser()
            {
                this.loading = true;
                this.error = false;
                this.message = "";
                this.form.submit('/login').then((response) => {

                    if (response.data.success === true )
                    {
                        this.message = response.data.message;
                        this.otp = response.data.body.otp;
                        this.otpLeg = response.data.body.otp;

                        if (!this.otpLeg)
                        {
                            setTimeout(function () {
                                window.location = `${window.location.origin}/`;
                            } , 2000 );
                        } else {
                            this.loading = false;
                        }



                    } else {
                        this.message = response.data.message;
                        this.loading = false;
                        this.error = true;
                    }
                }).catch((error) => {
                    this.loading = false;
                });
            },
            loginOTPUser()
            {
                this.loading = true;
                this.error = false;
                this.message = "";
                this.form.submit('/login/otp').then((response) => {

                    if (response.data.success === true )
                    {
                        this.message = response.data.message;
                        setTimeout(function () {
                            window.location = `${window.location.origin}/`;
                        } , 2000 );

                    } else {
                        this.message = response.data.message;
                        this.loading = false;
                        this.error = true;
                    }
                }).catch((error) => {
                    this.loading = false;
                });
            }
        }
    }
</script>
