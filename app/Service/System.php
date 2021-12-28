<?php


namespace App\Service;
use App\SystemVariables;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class System
{
    /**
     * @param $key
     * @return Builder|Model|object|null
     * @throws Exception
     */
    public static function key($key)
    {
        $system = SystemVariables::query()->where('key' , '=' , $key)->first();
        if ($system)
        {
            return  $system;
        }

        throw new Exception('Key Missing');
    }

    /**
     * @param $key
     * @return mixed
     * @throws Exception
     */
    public static function value($key)
    {
        return System::key($key)->value;
    }

    /**
     * @param $key
     * @param $value
     * @return Builder|Model|object|null
     * @throws Exception
     */
    public static function set($key , $value)
    {
        $system = SystemVariables::query()->where('key' , '=' , $key)->first();

        if ($system)
        {
            $system->update([
                'value' => $value
            ]);

            return  $system;
        }

        throw new Exception('Key Missing');
    }
}