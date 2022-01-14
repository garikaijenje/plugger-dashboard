<!-- header -->
<header class="header">
    <div class="header__content">
        <div class="header__logo">
            <a href="/">
                <img style="height: 40px;width: auto" src="{{ asset('images/plugger-logo-1-white.png') }}" alt="">
            </a>
        </div>
            <nav class="header__nav">
                @if (auth()->check())
                    <router-link to="/profile"> <i class="mdi mdi-account mr-2 mdi-18px"></i> Profile</router-link>
                    <router-link to="/upload"> <i class="mdi mdi-cloud-upload mr-2 mdi-18px"></i> Upload Music</router-link>
                    <a href="/admin" target="_blank"> <i class="mdi mdi-monitor-dashboard mr-2 mdi-18px"></i> Admin</a>
                @endif
            </nav>
        <form action="#" class="header__search">
            <input type="text" placeholder="Artist, track or podcast">
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
            <button type="button" class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
        </form>

        <div class="header__actions">
            <div class="header__action header__action--search">
                <button class="header__action-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"/></svg></button>
            </div>

            @if (auth()->check())


                <form id="logout-form" action="/logout" method="POST" style="display: none;">
                    @csrf
                </form>

                <div class="header__action header__action--signin">
                    <a @click.prevent="logout" class="header__action-btn" href="#">
                        <span>{{ auth()->user()->name  }} {{ auth()->user()->last_name  }} |  Sign out</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path></svg>
                    </a>
                </div>

                @else

                <div class="header__action header__action--signin">
                    <a class="header__action-btn" href="/login">
                        <span>Sign in</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"/></svg>
                    </a>
                </div>

            @endif

        </div>
        <button class="header__btn" type="button">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>
<!-- end header -->

<!-- sidebar -->
<div class="sidebar">
    <!-- sidebar logo -->
    <div class="sidebar__logo">
        <img style="height: 40px;width: auto" src="{{ asset('images/plugger-logo-1-white.png') }}" alt="">
    </div>
    <!-- end sidebar logo -->

    <!-- sidebar nav -->
    <ul class="sidebar__nav">
        <li class="sidebar__nav-item">
            <router-link active-class="sidebar__nav-link--active" to="/" class="sidebar__nav-link">
                <i class="mdi mdi-home mdi-18px mr-2"></i><span>Home</span>
            </router-link>
        </li>

        <li class="sidebar__nav-item">
            <router-link to="/a" class="sidebar__nav-link">
                <i class="mdi mdi-music mdi-18px mr-2"></i><span>Music</span>
            </router-link>
        </li>

        <li class="sidebar__nav-item">
            <router-link to="/a" class="sidebar__nav-link">
                <i class="mdi mdi-account-supervisor-outline mdi-18px mr-2"></i><span>Artists</span>
            </router-link>
        </li>

        <li class="sidebar__nav-item">
            <router-link to="/b" class="sidebar__nav-link">
                <i class="mdi mdi-music-circle-outline mdi-18px mr-2"></i><span>New Releases</span>
            </router-link>
        </li>

        @if (auth()->check())

            <li class="sidebar__nav-item p-border-light-top mt-5 pt-5">
                <a href="#" class="sidebar__nav-link">
                    <i></i> <span>MY LIBRARY</span>
                </a>
            </li>

            <li class="sidebar__nav-item">
                <router-link to="/b" class="sidebar__nav-link">
                    <i class="mdi mdi-account mdi-18px mr-2"></i> <span>Profile</span>
                </router-link>
            </li>

            <li class="sidebar__nav-item">
                <router-link to="/library/albums" class="sidebar__nav-link">
                    <i class="mdi mdi-folder mdi-18px mr-2"></i> <span>Albums</span>
                </router-link>
            </li>

            <li class="sidebar__nav-item">
                <router-link to="/b" class="sidebar__nav-link">
                    <i class="mdi  mdi-music-note mdi-18px mr-2"></i> <span>Songs</span>
                </router-link>
            </li>

        @endif


    </ul>
    <!-- end sidebar nav -->
</div>