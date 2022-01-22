<template>
    <div class="card-body p-border-light rounded mh-50vh">
        <div class="d-flex align-items-center">
            <h5 class="m-0 text-capitalize text-white">PASSWORD INFORMATION</h5>
        </div>
        <div class="mt-5 text-white row">

            <div class="col-lg-12">
                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                    {{ message }}
                </p>
            </div>

            <div class="col-lg-12 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Old Password</label>
                    <input type="password" v-model="form.old_password" name="old_password" :class="[ 'sign__input' , form.errors.get('old_password') ? 'is-invalid' : '' ]" placeholder="Old Password"/>
                    <div v-text="form.errors.get('old_password')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">New Password </label>
                    <input type="password" v-model="form.password" name="password" :class="[ 'sign__input' , form.errors.get('password') ? 'is-invalid' : '' ]" placeholder="New Password">
                    <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Repeat Password</label>
                    <input type="password" v-model="form.password_confirmation" name="password_confirmation" :class="[ 'sign__input' , form.errors.get('password_confirmation') ? 'is-invalid' : '' ]" placeholder="Repeat Password"/>
                    <div v-text="form.errors.get('password_confirmation')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-12 text-center">
                <button @click.prevent="submit"  :class="['btn btn-primary' , form.loading || loading ? 'btn-loading' : '']">Update Password</button>
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
                    old_password : '',
                    password : '',
                    password_confirmation : '',
                })
            };
        },

        methods : {
            submit()
            {
                this.form.submit(`/admin/password`).then((response) => {
                    this.message = response.data.message;
                }).catch((error) => {
                }).finally(() => {
                });
            },

            init()
            {

            }
        },mounted() {
            this.init();
        }
    }
</script>

<style scoped>

</style>