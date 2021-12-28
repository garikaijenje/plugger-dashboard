<template>
    <div>
        <div style="background-color: #252C65">
            <div class="container d-flex justify-content-between">
                <ul class="nav secondary-nav d-flex justify-content-between w-100">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <a>
                                <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-bolt"></i>
                            </span>
                                Electricity
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/airtime">
                            <a>
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-phone"></i>
                            </span>
                            Airtime
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/bundles">
                            <a>
                                <span class="font-weight-bolder text-5">
                                    <i class="fas fa fa-globe-europe"></i>
                                </span>
                                Bundles
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  disabled text-muted" href="#">
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-gas-pump"></i>
                            </span>
                            LP Gas
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  disabled text-muted" href="#">
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-money-bill"></i>
                            </span>
                            City of Hre
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  disabled text-muted" href="#">
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-building"></i>
                            </span>
                            Insurance
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  disabled text-muted" href="#">
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-school"></i>
                            </span>
                            School Fees
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled text-muted" href="#">
                            <span class="font-weight-bolder text-5">
                                <i class="fas fa fa-wifi"></i>
                            </span>
                            Wifi
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="content">
            <!-- Send Money
        ============================================= -->
            <section class="hero-wrap section shadow-md">
                <div class="hero-bg" style="background-size: cover;background: url('/img/Curve Line.svg') no-repeat;"></div>
                <div class="hero-content">
                    <keep-alive>
                        <transition name="slide-in-left">
                            <router-view></router-view>
                        </transition>
                    </keep-alive>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        mounted()
        {


            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            let context = params.get('context');
            if (context)
            {
                if (context === "stripe")
                {
                    let id = params.get('id');
                    let type = params.get('type');

                    if (id && type)
                    {
                        if (type === "zesa")
                        {
                            this.$router.push(`/zesa/stripe?id=${id}`);
                        }
                        if (type === "airtime")
                        {
                            this.$router.push(`/airtime/stripe?id=${id}`);
                        }

                        if (type === "bundles")
                        {
                            this.$router.push(`/bundles/stripe?id=${id}`);
                        }
                    }
                }
            }

        }
    }
</script>
