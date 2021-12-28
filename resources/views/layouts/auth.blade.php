<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>{{ config('app.name') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('image/favicon.png') }}" rel="icon" />
    <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" />
</head>
<body>
<div>
    <div class="account-pages pt-5 pb-5">
        <div id="app" class="container">
            <div class="row justify-content-center">
                <div class="@if (isset($col))
                {{ $col }}
                @else
                {{ 'col-lg-5' }}
                @endif ">
                    <div class="card">
                        <div class="card-header py-4 text-center">
                            <a href="/">
                                <span><img src="{{ asset('image/logo-purple.png') }}" alt="" height="55"></span>
                            </a>
                        </div>
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer footer-alt">
         © {{ now()->format('Y') }} {{ config('app.name') }}
    </footer>
</div>

<script src="{{ asset("/assets/js/vendor.min.js") }}"></script>
<script src="{{ asset("/assets/js/app.min.js") }}"></script>
<script src="{{ asset("/js/app.js") }}"></script>

</body>
</html>
