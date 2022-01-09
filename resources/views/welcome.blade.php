@extends('layouts.site')
@section('content')
    <div class="container-fluid mh-80vh">
        <keep-alive>
            <transition name="slide-in-left">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </div>
@stop