<template>
    <div class="card-body p-border-light rounded mh-50vh">
        <div class="d-flex align-items-center">
            <h5 class="m-0 text-capitalize text-white"> ARTIST INFORMATION</h5>
            <router-link to="/profile/artist" class="btn btn-primary ml-auto">View Artist</router-link>
        </div>
        <div class="mt-5 text-white row">

            <div class="col-lg-12">
                <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                    {{ message }}
                </p>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">State Name</label>
                    <input type="text" v-model="form.stage_name" name="name" :class="[ 'sign__input' , form.errors.get('stage_name') ? 'is-invalid' : '' ]" placeholder=""/>
                    <div v-text="form.errors.get('stage_name')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Nationality </label>
                    <input type="text" v-model="form.nationality" name="name" :class="[ 'sign__input' , form.errors.get('nationality') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('nationality')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">National ID</label>
                    <input type="text" v-model="form.national_id" name="name" :class="[ 'sign__input' , form.errors.get('national_id') ? 'is-invalid' : '' ]" placeholder=""/>
                    <div v-text="form.errors.get('national_id')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Start Year</label>
                    <input type="date" v-model="form.start_year" name="name" :class="[ 'sign__input' , form.errors.get('start_year') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('start_year')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Marital Status</label>
                    <select type="text" v-model="form.marital_status" name="name" :class="[ 'sign__input' , form.errors.get('marital_status') ? 'is-invalid' : '' ]" placeholder="">
                        <option value="single">Choose Marital</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="other">Other</option>
                    </select>
                    <div v-text="form.errors.get('marital_status')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Booking Number</label>
                    <input type="text" v-model="form.booking_number" name="name" :class="[ 'sign__input' , form.errors.get('booking_number') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('booking_number')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Facebook</label>
                    <input type="text" v-model="form.facebook" name="name" :class="[ 'sign__input' , form.errors.get('facebook') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('facebook')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Instagram</label>
                    <input type="text" v-model="form.instagram" name="name" :class="[ 'sign__input' , form.errors.get('instagram') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('instagram')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Twitter</label>
                    <input type="text" v-model="form.twitter" name="name" :class="[ 'sign__input' , form.errors.get('twitter') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('twitter')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Tiktok</label>
                    <input type="text" v-model="form.tiktok" name="name" :class="[ 'sign__input' , form.errors.get('tiktok') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('tiktok')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-12">
                <h5 class="m-0 text-capitalize text-white"> NEXT OF KIN INFORMATION</h5>
            </div>

            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Name</label>
                    <input type="text" v-model="form.n_name" name="name" :class="[ 'sign__input' , form.errors.get('n_name') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('n_name')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Last Name</label>
                    <input type="text" v-model="form.n_last_name" name="name" :class="[ 'sign__input' , form.errors.get('n_last_name') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('n_last_name')" class="main__table-text--red small"/>
                </div>
            </div>


            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Phone</label>
                    <input type="text" v-model="form.n_phone" name="name" :class="[ 'sign__input' , form.errors.get('n_phone') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('n_phone')" class="main__table-text--red small"/>
                </div>
            </div>
            <div class="col-lg-6 mt-3">
                <div class="sign__group">
                    <label class="text-white small">Email</label>
                    <input type="text" v-model="form.n_email" name="name" :class="[ 'sign__input' , form.errors.get('n_email') ? 'is-invalid' : '' ]" placeholder="">
                    <div v-text="form.errors.get('n_email')" class="main__table-text--red small"/>
                </div>
            </div>

            <div class="col-lg-12 text-center">
                <button @click.prevent="submit"  :class="['btn btn-primary' , form.loading || loading ? 'btn-loading' : '']">Update Artist</button>
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
                    stage_name: '',
                    nationality: '',
                    national_id: '',
                    start_year: '',
                    marital_status: '',
                    booking_number: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    tiktok: '',
                    n_name: '',
                    n_last_name: '',
                    n_phone: '',
                    n_email: ''
                }),
            };
        },

        methods : {
            submit()
            {
                this.form.submit(`/site/library/artist/edit`).then((response) => {
                    this.user = response.data.body.user;
                    window.user =  this.user;
                    this.message = response.data.message;
                }).catch((error) => {
                }).finally(() => {
                });
            },

            init()
            {
                this.form.extract(this.user.artist);
            }
        },mounted() {
            this.init();
        }
    }
</script>

<style scoped>

</style>