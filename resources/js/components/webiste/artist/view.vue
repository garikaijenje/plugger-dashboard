<template>
    <div class="card-body p-border-light rounded mh-50vh">
        <div class="d-flex align-items-center">
            <h5 class="m-0 text-capitalize text-white"> ARTIST INFORMATION</h5>
            <router-link to="/profile/artist/edit" class="btn btn-primary ml-auto">Edit Artist</router-link>
        </div>
        <div class="mt-5 text-white row">
            <p class="col-6"><span>Stage Name : </span> <strong>{{ user.artist.stage_name}}</strong> </p>
            <p class="col-6"><span>Nationality : </span> <strong>{{ user.artist.nationality}}</strong> </p>
            <p class="col-6"><span>National ID : </span> <strong>{{ user.artist.national_id}}</strong> </p>
            <p class="col-6"><span>Start Year : </span> <strong>{{ user.artist.start_year}}</strong> </p>
            <p class="col-6"><span>Marital Status : </span> <strong>{{ user.artist.marital_status}}</strong> </p>
            <p class="col-6"><span>Booking Number : </span> <strong>{{ user.artist.booking_number}}</strong> </p>
            <p class="col-6"><span>Facebook : </span> <strong>{{ user.artist.facebook}}</strong> </p>
            <p class="col-6"><span>Instagram : </span> <strong>{{ user.artist.instagram}}</strong> </p>
            <p class="col-6"><span>Twitter : </span> <strong>{{ user.artist.twitter}}</strong> </p>
            <p class="col-6"><span>Tiktok : </span> <strong>{{ user.artist.tiktok}}</strong> </p>
        </div>

        <div class="mt-5 text-white row">
            <div class="col-lg-12">
                <h5 class="m-0 text-capitalize text-white"> NEXT OF KIN INFORMATION</h5>
            </div>
            <div class="col-lg-12 mt-5 text-white"></div>
            <p class="col-6"><span>Name : </span> <strong>{{ user.artist.n_name}}</strong> </p>
            <p class="col-6"><span>Last Name : </span> <strong>{{ user.artist.n_last_name}}</strong> </p>
            <p class="col-6"><span>Phone : </span> <strong>{{ user.artist.n_phone}}</strong> </p>
            <p class="col-6"><span>Next of kin  : </span> <strong>{{ user.artist.n_email}}</strong> </p>

        </div>

    </div>
</template>

<script>
    export default {
        name: "profile",
        data(){
            return {
                user : window.user
            };
        }
    }
</script>

<style scoped>

</style>