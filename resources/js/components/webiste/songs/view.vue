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

                        <div class="release">
                            <div class="release__content">

                                <div class="">
                                    <router-link :to="`/upload/song?album=${model.id}`" class="btn btn-primary btn-block mb-3"> <i class="mdi mdi-plus mr-2"></i>Add Songs</router-link>
                                </div>

                                <div class="release__cover">
                                    <img v-if="model.cover.optimized"  :src="model.cover.medium" alt="">
                                    <img v-else :src="model.cover.path" alt="">
                                </div>

                                <div class="py-3">
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">ALBUM</div>
                                        <div class="font-weight-bolder text-white text-right col-9">{{ model.name }}</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">ARTIST</div>
                                        <div class="font-weight-bolder text-white text-right col-9">{{ model.artist }}</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">DESCRIPTION</div>
                                        <div class="font-weight-bolder text-white text-right col-9">{{ model.description }}</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">PROVINCE</div>
                                        <div class="font-weight-bolder text-white text-right col-9">{{ model.province.name }}</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">DATE</div>
                                        <div class="font-weight-bolder text-white text-right col-9">{{ model.created_at.substring(0, 10) }}</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">LANGUAGE</div>
                                        <div class="font-weight-bolder text-white text-right col-9">

                                            <span v-for="item in model.language" class="badge badge-light mr-2">
                                                    {{ item.name }}
                                            </span>

                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-2">
                                        <div class="small text-capitalize text-white-50 col-3">GENRE</div>
                                        <div class="font-weight-bolder text-white text-right col-9">

                                            <span v-for="item in model.genre" class="badge badge-light mr-2">
                                                    {{ item.name }}
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between mt-3">
                                    <a href="" class="btn  btn-primary btn-sm"><i class="mdi mdi-pencil mr-2"></i>Edit</a>
                                    <a href="" class="btn  btn-primary btn-sm"><i class="mdi mdi-delete mr-2"></i>Delete</a>
                                    <a href="" class="btn  btn-primary btn-sm"><i class="mdi mdi-cart mr-2"></i>Publish</a>
                                </div>
                            </div>

                            <div class="release__list">
                                <ul class="main__list main__list--playlist main__list--dashbox">
                                    <li class="single-item">
                                        <a  class="">
                                            <div class="main__table-img">
                                                <img v-if="model.cover.optimized" :src="model.cover.small" alt="">
                                                <img v-else :src="model.cover.path" alt="">
                                            </div>
                                        </a>
                                        <div class="single-item__title">
                                            <h4><a href="#">1. Got What I Got</a></h4>
                                            <span><a href="artist.html">Jason Aldean</a></span>
                                        </div>
                                        <a href="#" class="single-item__add">

                                        </a>
                                        <a href="#" class="single-item__export">

                                        </a>
                                        <span class="single-item__time">2:58</span>
                                    </li>
                                </ul>
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
               window.axios.get(`${window.location.origin}/site/library/albums/${this.$route.params.id}/view`).then((response) => {
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
