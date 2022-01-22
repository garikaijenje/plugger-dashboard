<template>
    <div class="card-body p-border-light rounded mh-50vh">
        <div class="d-flex align-items-center">
            <h5 class="m-0 text-capitalize text-white"> PROFILE INFORMATION</h5>
            <router-link to="/profile/edit" class="btn btn-primary ml-auto">Edit Profile</router-link>
        </div>
        <div class="mt-5 text-white row">
            <p class="col-6"><span>Name : </span> <strong>{{ user.name}}</strong> </p>
            <p class="col-6"><span>Last Name : </span> <strong>{{ user.last_name}}</strong> </p>
            <p class="col-6"><span>Account Type : </span> <strong>{{ user.type}}</strong> </p>
            <p class="col-6"><span>Date Created : </span> <strong>{{ user.created_at }}</strong> </p>
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