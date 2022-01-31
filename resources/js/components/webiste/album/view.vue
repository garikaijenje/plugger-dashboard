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

                        <div class="row">
                            <div class="col-lg-4">
                                <div class="">
                                    <router-link :to="`/upload/song?album=${model.id}`" class="btn btn-primary btn-block mb-3"> <i class="mdi mdi-plus mr-2"></i>Add Songs</router-link>
                                </div>

                                <div class="text-center">
                                    <img style="max-width: 300px" v-if="model.cover.optimized"  :src="model.cover.medium" alt="">
                                    <img style="max-width: 300px" v-else :src="model.cover.path" alt="">
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
                                        <div class="font-weight-bolder text-white text-right col-9">{{   model.created_at ? model.created_at.substring(0, 10) : '' }}</div>
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
                            </div>

                            <div class="col-lg-8">
                                <div class="p-border-light rounded">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-end">
                                            <router-link :to="`/library/albums/${$route.params.id}/edit`" class="btn  btn-primary px-5 mr-3"><i class="mdi mdi-pencil mr-2"></i>Edit</router-link>
                                            <button @click="cart" class="btn  btn-primary px-5 mr-3"><i class="mdi mdi-cart mr-2"></i>Add To Cart</button>
                                            <button @click="remove()" class="btn  btn-danger mr-3"><i class="mdi mdi-delete mr-2"></i>Delete</button>
                                        </div>
                                    </div>

                                    <table class="main__table">
                                        <tbody>
                                        <tr v-for="row in songs">
                                            <td class="px-2"></td>
                                            <td>
                                                <div class="main__table-text text-primary">
                                                    #{{ row.id }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="main__table-img">
                                                    <img v-if="row.cover.optimized" :src="row.cover.small" alt="">
                                                    <img v-else :src="row.cover.path" alt="">
                                                </div>
                                            </td>
                                            <td>
                                                <div class="main__table-text">
                                                    {{ row.song_title }} <br>
                                                    {{ row.album_title }}
                                                </div>
                                            </td>
                                            <td class="text-wrap">
                                                <div class="main__table-text">
                                            <span v-for="item in row.genre" class="badge badge-light mr-2">
                                                {{ item.name }}
                                            </span>
                                                </div>
                                            </td>
                                            <td class="text-wrap">
                                                <div class="main__table-text">
                                            <span v-for="item in row.language" class="badge badge-light mr-2">
                                                {{ item.name }}
                                            </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="main__table-text main__table-text--price">
                                                    {{ row.description | string_limit }} <br>
                                                    {{ row.province.name }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="main__table-text">
                                                    {{ row.created_at }}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <router-link :to="`/library/songs/${row.id}/view`" class="single-item__export mr-3" type="button">
                                                        <i class="mdi mdi-eye mdi-24px"></i>
                                                    </router-link>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
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
                songs : [],
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

            cart()
            {
                window.action('add' , 'Album to cart' , `${window.location.origin}/site/library/albums/${this.$route.params.id}/cart`).then((response) => {
                    this.init();
                    this.loadSongs();
                });
            },

            remove()
            {
                window.action('Delete' , 'Album' , `${window.location.origin}/site/library/albums/${this.$route.params.id}/delete`).then((response) => {
                    this.$router.back();
                });
            },

           init()
           {
               this.loading = true;
               window.axios.get(`${window.location.origin}/site/library/albums/${this.$route.params.id}/view`).then((response) => {
                   this.model = response.data.body.model;
               }).finally(() => {
                   this.loading = false;
               });
           },
            loadSongs()
           {
               this.loading = true;
               window.axios.get(`${window.location.origin}/site/library/albums/${this.$route.params.id}/songs`).then((response) => {
                   this.songs = response.data.body.songs;
               }).finally(() => {
                   this.loading = false;
               });
           }
        },
        mounted()
        {
            this.init();
            this.loadSongs();
        },
    }
</script>
