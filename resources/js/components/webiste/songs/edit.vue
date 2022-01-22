<template>
    <div class="row align-content-center justify-content-center mt-5">
        <div class="col-lg-7">
            <div class="p-3 p-border-light">

                <div :class="['dimmer' , loading || pageLoading  ? 'active' : '' ]">
                    <div class="loader"></div>
                    <div class="dimmer-content">
                        <div class="row p-3 align-content-center">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="songart" :style="{ 'background-image': `url(${previewImage})` }">
                                        <input type="file" id="imageInput" ref="imageInput" class="drag-container" @change="pickFile()" accept="image/*" />
                                        <p style="display: flex;align-items: center;justify-content: center;background-color: rgba(0,0,0,0.2)" class="text-center text-white">
                                            Drop your images here <br> or click to select
                                        </p>
                                    </div>
                                </div>
                                <div v-text="form.errors.get('file')" class="main__table-text--red small"/>
                            </div>
                            <div class="col-lg-6">
                                <div class="sign__group">
                                    <label class="text-white small">Song</label>
                                    <input type="file"  @change="load_song_file" ref="song_file" name="song_file" :class="[ 'sign__input' , form.errors.get('song_file') ? 'is-invalid' : '' ]">
                                    <div v-text="form.errors.get('song_file')" class="main__table-text--red small"/>
                                </div>

                                <div class="sign__group mt-5">
                                    <label class="text-white small">Instrumental</label>
                                    <input type="file" ref="instrumental_file" @change="load_instrumental_file"  name="name" :class="[ 'sign__input' , form.errors.get('instrumental_file') ? 'is-invalid' : '' ]">
                                    <div v-text="form.errors.get('instrumental_file')" class="main__table-text--red small"/>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-3">

                                <div class="sign__group">
                                    <label class="text-white small">Song Title</label>
                                    <input type="text" v-model="form.song_title" name="name" :class="[ 'sign__input' , form.errors.get('song_title') ? 'is-invalid' : '' ]" placeholder="Enter Song Title" autocomplete="unique-1">
                                    <div v-text="form.errors.get('song_title')" class="main__table-text--red small"/>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-3">

                                <div class="sign__group">
                                    <label class="text-white small">Artist</label>
                                    <input type="text" v-model="form.artist" name="name" :class="[ 'sign__input' , form.errors.get('artist') ? 'is-invalid' : '' ]" placeholder="Enter Artist name" autocomplete="unique-1">
                                    <div v-text="form.errors.get('artist')" class="main__table-text--red small"/>
                                </div>


                                <div class="sign__group">
                                    <label class="text-white small">Genre</label>
                                    <select @change="addGenre" type="text" v-model="selectedGenre" name="genre" :class="[ 'sign__input' , form.errors.get('genre') ? 'is-invalid' : '' ]">
                                        <option :value="{}">Select to add genre</option>
                                        <option v-for="item in genre" :value="item">{{ item.name }}</option>
                                    </select>
                                    <div v-text="form.errors.get('genreIDs')" class="main__table-text--red small"/>

                                    <div class="mt-2">
                                        <span class="badge badge-light mr-2" v-for="item in form.genre">
                                            <span class="mr-2">{{ item.name }}</span> <span class="pointer border-left border-dark px-1 text-dark" @click="removeGenre(item)" ><i class="mdi mdi-close"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="sign__group">
                                    <label class="text-white small">Province</label>
                                    <select  type="text" v-model="form.province"  name="province" :class="[ 'sign__input' , form.errors.get('province') ? 'is-invalid' : '' ]">
                                        <option value="">Select Province</option>
                                        <option v-for="item in province" :value="item.id">{{ item.name }}</option>
                                    </select>
                                    <div v-text="form.errors.get('province')" class="main__table-text--red small"/>
                                </div>


                            </div>
                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Album Name</label>
                                    <input type="text" v-model="form.album" name="name" :class="[ 'sign__input' , form.errors.get('album') ? 'is-invalid' : '' ]" placeholder="Enter Album Name" autocomplete="unique-1">
                                    <div v-text="form.errors.get('album')" class="main__table-text--red small"/>
                                </div>
                                <div class="sign__group">
                                    <label class="text-white small">Language</label>
                                    <select @change="addLanguage"  type="text" v-model="selectLanguage" name="genre" :class="[ 'sign__input' , form.errors.get('language') ? 'is-invalid' : '' ]">
                                        <option :value="{}">Select to add Language</option>
                                        <option v-for="item in language" :value="item">{{ item.name }}</option>
                                    </select>
                                    <div v-text="form.errors.get('languageIDs')" class="main__table-text--red small"/>

                                    <div class="mt-2">
                                        <span class="badge badge-light mr-2" v-for="item in form.language">
                                            <span class="mr-2">{{ item.name }}</span> <span class="pointer border-left border-dark px-1 text-dark" @click="removeLanguage(item)" ><i class="mdi mdi-close"></i></span>
                                        </span>
                                    </div>
                                </div>

                                <div class="sign__group">
                                    <label class="text-white small">Writer</label>
                                    <input type="text" v-model="form.writer" name="name" :class="[ 'sign__input' , form.errors.get('writer') ? 'is-invalid' : '' ]" placeholder="Enter Writer" autocomplete="unique-1">
                                    <div v-text="form.errors.get('writer')" class="main__table-text--red small"/>
                                </div>

                            </div>


                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Copyrights</label>
                                    <input type="text" v-model="form.copyrights" name="name" :class="[ 'sign__input' , form.errors.get('copyrights') ? 'is-invalid' : '' ]" placeholder="Enter Copyrights"/>
                                    <div v-text="form.errors.get('copyrights')" class="main__table-text--red small"/>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Arranger </label>
                                    <input type="text" v-model="form.arranger" name="name" :class="[ 'sign__input' , form.errors.get('arranger') ? 'is-invalid' : '' ]" placeholder="Enter Arranger">
                                    <div v-text="form.errors.get('arranger')" class="main__table-text--red small"/>
                                </div>
                            </div>


                            <div class="col-lg-12">
                                <div class="sign__group">
                                    <label class="text-white small">Description</label>
                                    <textarea type="text" v-model="form.description" name="description" :class="[ 'sign__input' , form.errors.get('description') ? 'is-invalid' : '' ]" placeholder="Enter Description">
                                    </textarea>
                                    <div v-text="form.errors.get('description')" class="main__table-text--red small"/>

                                </div>
                            </div>


                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Track Number</label>
                                    <input type="number" v-model="form.track_number" name="name" :class="[ 'sign__input' , form.errors.get('track_number') ? 'is-invalid' : '' ]" placeholder="Enter Track Number"/>
                                    <div v-text="form.errors.get('track_number')" class="main__table-text--red small"/>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Release Date</label>
                                    <input type="date" v-model="form.release_date" name="name" :class="[ 'sign__input' , form.errors.get('release_date') ? 'is-invalid' : '' ]">
                                    <div v-text="form.errors.get('release_date')" class="main__table-text--red small"/>
                                </div>
                            </div>


                            <div class="col-lg-12 text-white">
                                STUDIO INFORMATION
                            </div>
                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Studio Name</label>
                                    <input type="text" v-model="form.studio_name" name="name" :class="[ 'sign__input' , form.errors.get('studio_name') ? 'is-invalid' : '' ]" placeholder="Enter Studio Name">
                                    <div v-text="form.errors.get('studio_name')" class="main__table-text--red small"/>
                                </div>
                            </div>
                            <div class="col-lg-6 mt-3">
                                <div class="sign__group">
                                    <label class="text-white small">Studio Producer</label>
                                    <input type="text" v-model="form.studio_producer" name="name" :class="[ 'sign__input' , form.errors.get('studio_producer') ? 'is-invalid' : '' ]" placeholder="Enter Studio Producer">
                                    <div v-text="form.errors.get('studio_producer')" class="main__table-text--red small"/>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-12 " v-if="form.loading">
                            <div class="p-1 bg-primary" :style="`width: ${form.uploadPercentage}%`"></div>
                        </div>

                        <div class="col-lg-12">
                            <button  @click.prevent="submit" :class="['sign__btn' , form.loading || loading || pageLoading ? 'btn-loading' : '']" type="button">Update Song</button>
                        </div>


                    </div>
                </div>


            </div>
        </div>

    </div>

</template>

<script>
    import Form from "../../../core/forms/form";

    export default {
        name: "init",
        components: {

        },
        data()
        {
            return {
                user : window.user,
                album : {
                    cover : {},
                    province : {},
                    genre : [],
                    language : [],
                    artists : {},
                },
                loading : false,
                previewImage: null,
                selectedGenre: {},
                selectedProvince: {},
                selectLanguage: {},
                genre : [],
                genreLoading : false,
                albumLoading : false,
                province : [],
                provinceLoading : false,
                language : [],
                languageLoading : false,
                form : new Form({
                    writer : '',
                    copyrights : '',
                    arranger : '',
                    song_file : '',
                    song_title : '',
                    instrumental_file : '',
                    duration : '',
                    track_number : '',
                    release_date : '',
                    studio_name : '',
                    studio_producer : '',
                    album : '',
                    genre : [],
                    genreIDs : [],
                    language : [],
                    languageIDs : [],
                    province : '',
                    provinceIDs : [],
                    artist : '',
                    artist_id : '',
                    description : '',
                    file : '',
                    album_id : '',
                })
            };
        },

        computed : {
            pageLoading : function ()
            {
                return  this.genreLoading || this.provinceLoading || this.languageLoading || this.albumLoading;
            }
        },

        methods: {

            submit()
            {
                this.form.genreIDs = this.form.genre.map(e => e.id);
                this.form.languageIDs = this.form.language.map(e => e.id);
                this.form.upload(`/site/library/songs/${this.$route.params.id}/edit`).then((response) => {
                    this.$router.push(`/library/songs/${response.data.body.model.id}/view`);
                }).catch((error) => {
                });
            },
            load_song_file()
            {
                this.form.song_file = this.$refs.song_file.files[0];
            },
            load_instrumental_file()
            {
                this.form.instrumental_file = this.$refs.instrumental_file.files[0];
            },

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
            loadAlbum()
            {
                if (this.$route.query.album)
                {
                    this.albumLoading = true;
                    window.axios.get(`${window.location.origin}/site/library/albums/${this.$route.query.album}/view`).then((response) => {
                        this.album = response.data.body.model;
                        this.form.album_id = response.data.body.model.id;
                        this.form.album =  response.data.body.model.name;
                        this.form.artist =  response.data.body.model.artist;
                        this.form.artist_id =  response.data.body.model.artist_id;
                        this.form.genre =  response.data.body.model.genre;
                        this.form.language =  response.data.body.model.language;
                        this.form.province =  response.data.body.model.province_id;

                    }).finally(() => {
                        this.albumLoading = false;
                    });
                }
            },
            loadGenre()
            {
                this.genreLoading = true;
                window.axios.get(`${window.location.origin}/genre/list`).then((response) => {
                    this.genre = response.data.body.list;
                }).finally(() => {
                    this.genreLoading = false;
                });
            },
            loadProvince()
            {
                this.provinceLoading = true;
                window.axios.get(`${window.location.origin}/province/list`).then((response) => {
                    this.province = response.data.body.list;
                }).finally(() => {
                    this.provinceLoading = false;
                });
            },
            loadLanguage()
            {
                this.languageLoading = true;
                window.axios.get(`${window.location.origin}/language/list`).then((response) => {
                    this.language = response.data.body.list;
                }).finally(() => {
                    this.languageLoading = false;
                });
            },
            addGenre()
            {
                if (this.selectedGenre !== {} && !this.form.genre.includes(this.selectedGenre))
                {
                    this.form.genre.push(this.selectedGenre);
                }

                this.selectedGenre = {};
            },
            addLanguage()
            {
                if (this.selectLanguage !== {} && !this.form.genre.includes(this.selectLanguage))
                {
                    this.form.language.push(this.selectLanguage);
                }

                this.selectLanguage = {};
            },
            removeGenre(item)
            {
                if (this.form.genre.includes(item))
                {
                    this.form.genre = this.form.genre.filter(e => e !== item);
                }
            },
            removeLanguage(item)
            {
                if (this.form.language.includes(item))
                {
                    this.form.language = this.form.language.filter(e => e !== item);
                }
            },
            init()
            {
                this.form.loading = true;
                window.axios.get(`${window.location.origin}/site/library/songs/${this.$route.params.id}/view`).then((response) => {
                    this.form.extract(response.data.body.model);
                    this.form.release_date = response.data.body.model.release_date.substr(0 , 10);
                    this.form.album = response.data.body.model.album_title;
                    this.form.artist = response.data.body.model.artist_name;
                    this.form.language = response.data.body.model.language;
                    this.form.province = response.data.body.model.province_id;
                    this.form.description = response.data.body.model.description;
                    this.form.genre = response.data.body.model.genre;
                    this.previewImage = response.data.body.model.cover.path;
                }).finally(() => {
                    this.form.loading = false;
                });
            }
        },
        mounted()
        {
            this.init();
            this.loadGenre();
            this.loadLanguage();
            this.loadProvince();
        }

    }
</script>

<style scoped>

</style>