<template>
    <div class="row">

        <div class="col-12">
            <ul class="breadcrumb bg-transparent">
                <li class="breadcrumb__item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb__item breadcrumb__item--active">Profile</li>
            </ul>
        </div>

        <div class="col-12">
            <div class="profile p-3 mt-0">
                <div class="profile__user">
                    <div class="profile__avatar ml-3">
                        <i class="mdi mdi-account mdi-24px text-white"></i>
                    </div>
                </div>

                <div class="">
                    <router-link active-class="text-primary" exact="" class="text-white m-2" to="/profile"><i class="mdi mdi-account mdi-18px mr-2"></i>Profile</router-link>
                    <router-link active-class="text-primary" exact="" class="text-white m-2" to="/profile/artist"><i class="mdi mdi-account-check mdi-18px mr-2"></i>Artist</router-link>
                    <router-link active-class="text-primary" exact="" class="text-white m-2" to="/profile/password"><i class="mdi mdi-account-lock mdi-18px mr-2"></i>Password</router-link>
                </div>

                <button @click="logout" class="profile__logout" type="button">
                    <span>Sign out</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/></svg>
                </button>
            </div>
        </div>
        <div class="col-lg-12 mt-5"></div>
        <div class="col-lg-12 row justify-content-center">
            <div class="col-lg-3">
                <div class="">
                    <div class="col-lg-12">
                        <p v-if="message" class="alert text-white alert-plugger small rounded-0 w-100 text-center">
                            {{ message }}
                        </p>
                    </div>
                    <div class="p-2">
                        <div class="imagezone" :style="{ 'background-image': `url(${previewImage})` }">
                            <input type="file" id="imageInput" ref="imageInput" class="drag-container" @change="pickFile()" accept="image/*" />
                            <p style="display: flex;align-items: center;justify-content: center;background-color: rgba(0,0,0,0.2)" class="text-center text-white">
                                Drop your images here <br> or click to select
                            </p>
                        </div>
                    </div>
                    <div v-text="form.errors.get('file')" class="main__table-text--red small"/>


                    <div class="mt-2 " v-if="form.loading">
                        <div class="p-1 bg-primary" :style="`width: ${form.uploadPercentage}%`"></div>
                    </div>

                    <div class="mt-2 text-center">
                        <button @click="submit" class="btn btn-primary">Save Photo</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <keep-alive>
                    <transition name="slide-in-left">
                        <router-view></router-view>
                    </transition>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from "../../core/forms/form";

    export default {
        name: "dashboard",
        mounted()
        {
            this.init();
        },

        data :  function () {
            return {
               previewImage : "",
               message : "",
               user : window.user,
                form : new Form({
                    file : ''
                })
            };
        },
        methods : {

            pickFile ()
            {
                let input = this.$refs.imageInput;
                let file = input.files;
                if (file && file[0]){
                    let reader = new FileReader;
                    reader.onload = e => {
                        this.previewImage = e.target.result;
                    };
                    reader.readAsDataURL(file[0]);
                }

                this.form.file = this.$refs.imageInput.files[0];
            },

            submit()
            {
                this.form.upload('/site/library/profile/image').then((response) => {
                    this.user = response.data.body.user;
                    window.user =  this.user;
                    this.message = response.data.message;
                }).catch((error) => {
                });
            },

            init()
            {
                this.previewImage = this.user.cover ?
                    ( this.user.cover.optimized ? this.user.cover.medium : this.user.cover.path ) : "";
            },

            logout : function ()
            {
                document.getElementById('logout-form').submit();
            }
        }
    }
</script>
