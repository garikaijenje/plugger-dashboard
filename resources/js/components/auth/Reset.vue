<template>
    <div class="sign">
        <div class="sign__content">
            <!-- authorization form -->
            <form @submit.prevent="runForm" class="sign__form">
                <a href="/" class="sign__logo">
                    <img src="/images/plugger-logo-1-white.png" alt="">
                </a>

                <p class="text-center text-white mb-3">Enter your email address to receive your reset Token</p>

                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                    {{ message }}
                </p>

                <div class="sign__group">
                    <label class="text-white small">Email address</label>
                    <input type="text" v-model="form.email" name="email" :class="[ 'sign__input' , form.errors.get('email') ? 'is-invalid' : '' ]" placeholder="Enter your email" autocomplete="unique-1">
                    <div v-text="form.errors.get('email')" class="main__table-text--red small"/>
                </div>

                <div class="sign__group"  v-if="otpSent">
                    <label class="text-white small">Token</label>
                    <input type="text" v-model="form.token" name="email" :class="[ 'sign__input' , form.errors.get('token') ? 'is-invalid' : '' ]" placeholder="Enter Token" autocomplete="unique-1">
                    <div v-text="form.errors.get('token')" class="main__table-text--red small"/>
                </div>

                <div class="sign__group" v-if="otpSent">
                    <label class="text-white small">Password</label>
                    <input type="password" v-model="form.password" :class="[ 'sign__input' , form.errors.get('password') ? 'is-invalid' : '' ]"  placeholder="Enter your password" autocomplete="unique-2">
                    <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                </div>


                <div class="sign__group" v-if="otpSent">
                    <label class="text-white small">Confirm Password</label>
                    <input type="password" v-model="form.password_confirmation" :class="[ 'sign__input' , form.errors.get('password_confirmation') ? 'is-invalid' : '' ]"  placeholder="Re-Enter your password" autocomplete="unique-2">
                    <div v-text="form.errors.get('password')" class="main__table-text--red small"/>
                </div>

                <button v-if="!otpSent"  @click.prevent="getOTP" :class="['sign__btn' , form.loading || loading ? 'btn-loading' : '']" type="button">Get Token</button>
                <button v-if="otpSent"  @click.prevent="loginUser" :class="['sign__btn' , form.loading || loading ? 'btn-loading' : '']" type="button">Reset Password</button>

                <div class="mt-2">
                    <a @click.prevent="getOTP" href="#" class="text-primary"><small> Get new Reset Token ?</small></a>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import Form from "../../core/forms/form";

    export default {
        name: "reset",
        data()
        {
            return {
                loading : false,
                otpSent : false,
                error : false,
                message : '',
                form : new Form({
                    email : '',
                    password  :'',
                    password_confirmation  :'',
                    token : ''
                })
            };
        },
        methods : {
            getOTP()
            {
                this.loading = true;
                this.error = false;
                this.message = "";
                this.form.submit('/password/reset').then((response) => {
                    if (response.data.success === true ){
                        this.otpSent = true;
                        this.message = response.data.message;
                    } else {
                        this.message = response.data.message;
                        this.error = true;
                    }
                    this.loading = false;
                }).catch((error) => {
                    this.loading = false;
                });
            },
            loginUser()
            {
                this.loading = true;
                this.error = false;
                this.message = "";
                this.form.submit('/reset').then((response) => {
                    if (response.data.success === true ){
                        this.message = response.data.message;
                        setTimeout(function () {
                            window.location = `${window.location.origin}/login`;
                        } , 2000 );
                    } else {
                        this.message = response.data.message;
                        this.error = true;
                    }
                }).catch((error) => {
                    this.loading = false;
                });
            }
        }
    }
</script>
