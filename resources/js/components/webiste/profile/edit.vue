<template>
    <div class="card-body p-border-light rounded mh-50vh">
        <div class="d-flex align-items-center">
            <h5 class="m-0 text-capitalize text-white"> PROFILE INFORMATION</h5>
            <router-link to="/profile" class="btn btn-primary ml-auto">View Profile</router-link>
        </div>
        <div class="mt-5 text-white row">

            <div class="col-lg-12">
                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                    {{ message }}
                </p>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Name</label>
                    <input type="text" v-model="form.name" name="name" :class="[ 'sign__input' , form.errors.get('name') ? 'is-invalid' : '' ]" placeholder=""/>
                    <div v-text="form.errors.get('name')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Last Name </label>
                    <input type="text" v-model="form.last_name" name="name" :class="[ 'sign__input' , form.errors.get('last_name') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('last_name')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Phone</label>
                    <input type="text" v-model="form.phone" name="name" :class="[ 'sign__input' , form.errors.get('phone') ? 'is-invalid' : '' ]" placeholder=""/>
                    <div v-text="form.errors.get('phone')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Email</label>
                    <input type="text" v-model="form.email" name="name" :class="[ 'sign__input' , form.errors.get('arranger') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('email')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-12 text-center">
                <button @click.prevent="submit"  :class="['btn btn-primary' , form.loading || loading ? 'btn-loading' : '']">Update Profile</button>
            </div>

        </div>
    </div>
</template>

<script>
    import Form from "../../../core/forms/form";

    export default {
        name: "profile",
        data() {
            return {
                loading : false,
                message : "",
                user : window.user,
                form : new Form({
                    name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                }),
            };
        },

        methods : {
            submit()
            {
                this.form.submit(`/site/library/profile/edit`).then((response) => {
                   this.user = response.data.body.user;
                   window.user =  this.user;
                   this.message = response.data.message;

                }).catch((error) => {
                }).finally(() => {
                });
            },

            init()
            {
                this.form.extract(this.user);
            }
        },mounted() {
            this.init();
        }
    }
</script>

<style scoped>

</style>