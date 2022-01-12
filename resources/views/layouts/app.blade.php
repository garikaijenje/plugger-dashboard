<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>{{ config('app.name') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="user" content="{{ json_encode($user) }}">
    <link href="{{ asset('image/favicon.png') }}" rel="icon" />
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" />

    <!-- Favicons -->
    <link rel="icon" type="image/png" href="{{ asset('images/plugger_logo_1_white_Bmr_icon.ico') }}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{ asset('images/plugger_logo_1_white_Bmr_icon.ico') }}">

</head>

<body data-layout="detached" class="loading">
<div id="app">
    <div class="navbar-custom topnav-navbar topnav-navbar-dark">
        <div class="container-fluid">
            <a href="/" class="topnav-logo">
            <span class="topnav-logo-lg">
                <img src="{{ asset('images/plugger-logo-1-white.png') }}" alt="" height="43">
            </span>
                <span class="topnav-logo-sm">
                <img src="{{ asset('images/plugger-logo-1-white.png') }}" alt="" height="43">
            </span>
            </a>
            <ul class="list-unstyled topbar-right-menu float-right mb-0">
                <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <span class="account-user-avatar border border-primary rounded-circle">
                            <img src="{{ asset('images/hiclipart.com.png') }}" alt="user-image" class="rounded-circle">
                        </span>
                        <span>
                            <span class="account-user-name">{{ \Illuminate\Support\Str::limit(auth()->user()->name .' '. auth()->user()->last_name, 20 , '...')  }}</span>
                            <span class="account-position text-capitalize">{{ \Illuminate\Support\Str::limit( auth()->user()->email, 10 , '...')  }}</span>
                        </span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                        <router-link to="/admin/settings" class="dropdown-item notify-item">
                            <i class="mdi mdi-account-edit mr-1"></i>
                            <span>Settings</span>
                        </router-link>
                        <form id="logout-form" action="/admin/logout" method="POST" style="display: none;">
                            @csrf
                        </form>
                        <a @click.prevent="logout" href="#" class="dropdown-item notify-item">
                            <i class="mdi mdi-logout mr-1"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </li>
            </ul>
            <a class="button-menu-mobile disable-btn">
                <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </div>
    </div>
    <div style="margin-top: 70px" class="container-fluid">
        <div class="wrapper">

            <!-- ========== Left Sidebar Start ========== -->
            <div class="left-side-menu left-side-menu-detached">
                <ul class="metismenu side-nav py-4">
                    <li class="side-nav-title side-nav-item mt-2">Navigation</li>

                    <router-link to="/admin" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-chart-line"></i>
                        <span> Dashboard </span>
                    </router-link>

                    <li class="side-nav-title side-nav-item mt-2">System</li>
                    <router-link to="/admin/configuration" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-cog"></i>
                        <span> Configuration </span>
                    </router-link>
                    <router-link to="/admin/genre" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-hunting"></i>
                        <span> Genre </span>
                    </router-link>
                    <router-link to="/admin/language" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-comment-alt-plus"></i>
                        <span> Languages </span>
                    </router-link>
                    <router-link to="/admin/province" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-map-pin-alt"></i>
                        <span> Province </span>
                    </router-link>
                    <li class="side-nav-title side-nav-item mt-2">Manage</li>
                    <router-link to="/admin/users" class="side-nav-link"  active-class="text-primary">
                        <i class="uil-user"></i>
                        <span> Users </span>
                    </router-link>

                    <a href="/horizon" target="_blank" class="side-nav-link">
                        <i class="uil-desktop"></i>
                        <span> Monitor </span>
                    </a>

                    <div class="clearfix"></div>
                    <!-- Sidebar -left -->
                </ul>
            </div>
            <!-- Left Sidebar End -->

            <div style="margin-top: 30px" class="content-page">
                <div class="content">
                    @yield('content')
                </div>
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                ©{{ now()->format('Y') }} {{ config('app.name') }}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
<script src="{{ asset('assets/js/vendor.min.js') }}"></script>
<script src="{{ asset('assets/js/app.min.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
