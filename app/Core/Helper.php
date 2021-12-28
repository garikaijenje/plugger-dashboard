<?php


namespace App\Core;


use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;

trait Helper
{
    public function convertToFile($chunk)
    {
        $path = "/storage/" . Uuid::uuid1()->__toString() . Uuid::uuid1()->__toString() . '.out';
        $resource = fopen(public_path($path) , "w+");
        fwrite($resource , json_encode($chunk));
        fclose($resource);
        return $path;
    }

    public function convertFromFile($path)
    {
        $string = file_get_contents(public_path($path));
        return json_decode($string , true);
    }

    public function deleteFile($path)
    {
        File::delete(public_path($path));
    }
}