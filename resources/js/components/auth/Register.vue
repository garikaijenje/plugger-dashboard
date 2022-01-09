<template>
    <div class="sign">
        <div class="sign__content row align-content-center">
            <form @submit.prevent="register" class="col-lg-7">
                <a href="/" class="sign__logo text-center">
                    <img src="/images/plugger-logo-1-white.png" alt="">
                </a>

                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                     {{ message }}
                </p>

                <div class="row">
                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Name</label>
                        <input type="text" v-model="form.name" :class="[ 'sign__input' , form.errors.get('name') ? 'is-invalid' : '' ]" placeholder="Enter your name" autocomplete="unique-1">
                        <div v-text="form.errors.get('name')" class="main__table-text--red small"/>
                    </div>

                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Last Name</label>
                        <input type="text" v-model="form.last_name" :class="[ 'sign__input' , form.errors.get('last_name') ? 'is-invalid' : '' ]" placeholder="Enter your last name" autocomplete="unique-1">
                        <div v-text="form.errors.get('last_name')" class="main__table-text--red small"/>
                    </div>
                </div>
                <div class="row">
                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Email address</label>
                        <input type="text" v-model="form.email" :class="[ 'sign__input' , form.errors.get('email') ? 'is-invalid' : '' ]" placeholder="Enter your email" autocomplete="unique-1">
                        <div v-text="form.errors.get('email')" class="main__table-text--red small"/>
                    </div>

                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Phone</label>
                        <input type="number" v-model="form.phone" :class="[ 'sign__input' , form.errors.get('phone') ? 'is-invalid' : '' ]" placeholder="Enter your phone" autocomplete="unique-1">
                        <div v-text="form.errors.get('phone')" class="main__table-text--red small"/>
                    </div>
                </div>
                <div class="row">
                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Password</label>
                        <input type="password" v-model="form.password" :class="[ 'sign__input' , form.errors.get('password') ? 'is-invalid' : '' ]"  placeholder="Enter your password" autocomplete="unique-2">
                        <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                    </div>
                    <div class="sign__group col-lg-6">
                        <label class="text-white small">Confirm Password</label>
                        <input type="password" v-model="form.password_confirmation" :class="[ 'sign__input' , form.errors.get('password_confirmation') ? 'is-invalid' : '' ]"  placeholder="Re-Enter your password" autocomplete="unique-2">
                        <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                    </div>
                </div>
                <div class="text-center">
                    <button  @click.prevent="register" :class="['sign__btn' , form.loading || loading ? 'btn-loading' : '']" type="button">Register</button>
                    <span class="sign__delimiter">or</span>
                    <span class="sign__text">Already have an account ? <a href="/login">Log In</a></span>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import Form from "../../core/forms/form";

    export default {
        name: "login",
        data()
        {
            return {
                loading : false,
                error : false,
                otp : false,
                message : '',
                form : new Form({
                   name : '',
                   last_name : '',
                   email : '',
                   phone : '',
                   password  :'',
                   password_confirmation  :'',
                })
            };
        },
        methods : {
            runForm()
            {
                this.register();
            },
            register()
            {
                this.loading = true;
                this.error = false;
                this.message = "";
                this.form.submit('/register').then((response) => {
                    if (response.data.success === true ){
                        this.message = response.data.message;
                        setTimeout(function () {
                            window.location = `${window.location.origin}/`;
                        } , 2000 );
                    } else {
                        this.message = response.data.message;
                        this.loading = false;
                        this.error = true;
                    }
                }).catch((error) => {
                    this.loading = false;
                });
            }
        }
    }
</script>
