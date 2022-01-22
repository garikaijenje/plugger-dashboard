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

                        <div class="col-lg-12 row justify-content-center">
                            <div class="col-lg-3">
                                <div class="">
                                    <img style="max-width: 300px" v-if="model.cover.optimized"  :src="model.cover.medium" alt="">
                                    <img style="max-width: 300px" v-else :src="model.cover.path" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card-body p-border-light rounded mh-50vh">
                                    <div class="d-flex align-items-center">
                                        <h5 class="m-0 text-capitalize text-white"> SONG INFORMATION</h5>
                                        <button class="btn btn-primary ml-auto mr-2">Cart</button>
                                        <router-link :to="`/library/songs/${$route.params.id}/edit`" class="btn btn-primary mr-2">Edit Song</router-link>
                                        <a target="_blank" :href="`/site/library/songs/${$route.params.id}/download`" class="btn btn-primary mr-2">Download Song</a>
                                        <a target="_blank" :href="`/site/library/songs/${$route.params.id}/instrumental`" class="btn btn-primary">Download Instrumental</a>
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
                                        <p class="col-12"><span>Description : </span> <strong>{{ model.description}}</strong> </p>
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
