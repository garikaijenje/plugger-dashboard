<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="text-white mt-4">
                <h2 class="text-center">Please select your upload type:</h2>
            </div>
            <div class="d-flex justify-content-center mt-5 text-center">
                <router-link to="/upload/song" class="p-5 mr-3  rounded p-border-light p-hover-primary">
                    <i class="mdi mdi-music text-white mdi-48px"></i>
                    <div class="mt-3 px-5 text-white">Song</div>
                </router-link>
                <router-link to="/upload/album" class="p-5 mr-3  rounded p-border-light p-hover-primary">
                    <i class="mdi mdi-folder mdi-48px text-white"></i>
                    <div class="mt-3 px-5 text-white">Album</div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "dashboard",
        mounted()
        {

        }
    }
</script>
