<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="col-12">
                <ul class="breadcrumb bg-transparent">
                    <li class="breadcrumb__item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb__item">My Library</li>
                    <li class="breadcrumb__item"><router-link to="/library/albums">Albums</router-link></li>
                    <li class="breadcrumb__item breadcrumb__item--active">View</li>
                </ul>
            </div>
            <div class="col-12">

                <div :class="['dimmer' , loading ? 'active' : '']">
                    <div class="loader"></div>
                    <div class="dimmer-content">
                        <div class="col-lg-12 row align-items-center p-border-light rounded card-body">
                            <div class="col-lg-3">
                                <div v-if="model.song_path">
                                    <av-circle class="text-center"
                                            :outline-width="0"
                                            :progress-width="5"
                                            :outline-meter-space="5"
                                            :playtime="true"
                                            :canv-top="true"
                                            progress-color="#6200EE"
                                            bar-color="#6200EE"
                                            playtime-color="#6200EE"
                                            playtime-font="18px Monaco"
                                            :audio-src="model.song_path"
                                    ></av-circle>
                                </div>
                                <div class="mt-3 text-center">
                                    <img style="max-width: 250px" v-if="model.cover.optimized"  :src="model.cover.medium" alt="">
                                    <img style="max-width: 250px" v-else :src="model.cover.path" alt="">
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="card-body mh-50vh">
                                    <div class="d-flex align-items-center">
                                        <h5 class="m-0 text-capitalize text-white mr-auto"> SONG INFORMATION</h5>
                                        <button @click="cart" class="btn btn-primary mr-2"><i class="mdi mdi-cart mr-2"></i>Cart</button>
                                        <router-link :to="`/library/songs/${$route.params.id}/edit`" class="btn btn-primary mr-2"><i class="mdi mdi-pencil mr-2"></i>Edit Song</router-link>
                                        <a target="_blank" :href="`/site/library/songs/${$route.params.id}/download`" class="btn btn-primary mr-2"><i class="mdi mdi-download mr-2"></i>Download Song</a>
                                        <a target="_blank" :href="`/site/library/songs/${$route.params.id}/instrumental`" class="btn btn-primary mr-2"><i class="mdi mdi-download mr-2"></i>Download Instrumental</a>
                                        <button @click="remove()" class="btn btn-danger mr-2 "><i class="mdi mdi-trash-can mr-2"></i>Delete</button>
                                    </div>

                                    <div class="mt-5 text-white row">
                                        <p class="col-6"><span>Name : </span> <strong>{{ model.song_title}}</strong> </p>
                                        <p class="col-6"><span>Artist : </span> <strong>{{ model.artist_name}}</strong> </p>
                                        <p class="col-6"><span>ID : </span> <strong>{{ model.ref}}</strong> </p>
                                        <p class="col-6"><span>Release Date : </span> <strong>{{ model.release_date}}</strong> </p>
                                        <p class="col-6"><span>Track Number : </span> <strong>{{ model.track_number}}</strong> </p>
                                        <p class="col-6"><span>Album Title : </span> <strong>{{ model.album_title}}</strong> </p>
                                        <p class="col-6"><span>Copyrights : </span> <strong>{{ model.copyrights}}</strong> </p>
                                        <p class="col-6"><span>Writer : </span> <strong>{{ model.writer}}</strong> </p>
                                        <p class="col-6"><span>Studio Name : </span> <strong>{{ model.studio_name}}</strong> </p>
                                        <p class="col-6"><span>Studio Producer : </span> <strong>{{ model.studio_producer}}</strong> </p>
                                        <p class="col-6">
                                            <span>Genre : </span>
                                            <strong>
                                               <span v-for="item in model.genre" class="badge badge-light mr-2">
                                                {{ item.name }}
                                            </span>
                                            </strong>
                                        </p>
                                        <p class="col-6">
                                            <span>Language : </span>
                                            <strong>
                                               <span v-for="item in model.language" class="badge badge-light mr-2">
                                                {{ item.name }}
                                            </span>
                                            </strong>
                                        </p>
                                        <p class="col-6"><span>Province : </span> <strong>{{ model.province.name}}</strong> </p>
                                        <p class="col-6"><span>Created : </span> <strong>{{ model.created_at}}</strong> </p>

                                        <p class="col-12"><span>Description : </span> <strong>{{ model.description}}</strong> </p>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return {
                model: {
                    cover : {},
                    province : {},
                    genre : [],
                    language : [],
                },
                loading : false
            };
        },
        methods : {
            remove()
            {
                window.action('Delete' , 'Song' , `${window.location.origin}/site/library/songs/${this.$route.params.id}/delete`).then((response) => {
                    this.$router.back();
                });
            },
            cart()
            {
                window.action('add' , 'Song to cart' , `${window.location.origin}/site/library/songs/${this.$route.params.id}/cart`).then((response) => {
                    this.$router.push('/cart');
                    this.init();
                });
            },

           init()
           {
               this.loading = true;
               window.axios.get(`${window.location.origin}/site/library/songs/${this.$route.params.id}/view`).then((response) => {
                   this.model = response.data.body.model;
               }).finally(() => {
                   this.loading = false;
               });
           }
        },
        mounted()
        {
            this.init();
        },
    }
</script>
