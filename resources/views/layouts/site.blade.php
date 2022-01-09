<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    @if (auth()->check())
        <meta name="user" content="{{ json_encode(auth()->user()) }}">
    @endif

    <link rel="stylesheet" href="{{ asset('bootstrap-4.1.3-dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('site/css/paymentfont.min.css') }}">
    <link rel="stylesheet" href="{{ asset('site/css/slider-radio.css') }}">
    <link rel="stylesheet" href="{{ asset('site/css/plyr.css') }}">
    <link rel="stylesheet" href="{{ asset('site/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Favicons -->
    <link rel="icon" type="image/png" href="{{ asset('images/plugger_logo_1_white_Bmr_icon.ico') }}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{ asset('images/plugger_logo_1_white_Bmr_icon.ico') }}">

    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Plugger</title>

</head>
<body>

<div id="app">
@include('includes.header')
<!-- end sidebar -->
    <main class="main">
        @yield('content')
    </main>
    <!-- end main content -->
    @include('includes.footer')

</div>

<!-- JS -->
<script src="{{ asset('site/js/jquery-3.5.1.min.js') }}"></script>
<script src="{{ asset('site/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('site/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('site/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('site/js/smooth-scrollbar.js') }}"></script>
<script src="{{ asset('site/js/select2.min.js') }}"></script>
<script src="{{ asset('site/js/slider-radio.js') }}"></script>
<script src="{{ asset('site/js/jquery.inputmask.min.js') }}"></script>
<script src="{{ asset('site/js/plyr.min.js') }}"></script>
<script src="{{ asset('site/js/main.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>