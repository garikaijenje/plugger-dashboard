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
                                    <div class="imagezone" :style="{ 'background-image': `url(${previewImage})` }">
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
                                    <label class="text-white small">Artist</label>
                                    <input type="text" v-model="form.artist" name="name" :class="[ 'sign__input' , form.errors.get('artist') ? 'is-invalid' : '' ]" placeholder="Enter Artist name" autocomplete="unique-1">
                                    <div v-text="form.errors.get('artist')" class="main__table-text--red small"/>
                                </div>
                                <div class="sign__group">
                                    <label class="text-white small">Album Name</label>
                                    <input type="text" v-model="form.album" name="name" :class="[ 'sign__input' , form.errors.get('album') ? 'is-invalid' : '' ]" placeholder="Enter Album Name" autocomplete="unique-1">
                                    <div v-text="form.errors.get('album')" class="main__table-text--red small"/>
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
                                    <label class="text-white small">Province</label>
                                    <select  type="text" v-model="form.province"  name="province" :class="[ 'sign__input' , form.errors.get('province') ? 'is-invalid' : '' ]">
                                        <option value="">Select Province</option>
                                        <option v-for="item in province" :value="item.id">{{ item.name }}</option>
                                    </select>
                                    <div v-text="form.errors.get('province')" class="main__table-text--red small"/>
                                </div>

                                <div class="sign__group">
                                    <label class="text-white small">Description</label>
                                    <textarea type="text" v-model="form.description" name="description" :class="[ 'sign__input' , form.errors.get('description') ? 'is-invalid' : '' ]">
                            </textarea>
                                    <div v-text="form.errors.get('description')" class="main__table-text--red small"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 " v-if="form.loading">
                            <div class="p-1 bg-primary" :style="`width: ${form.uploadPercentage}%`"></div>
                        </div>

                        <div class="col-lg-12">
                            <button  @click.prevent="submit" :class="['sign__btn' , form.loading || loading || pageLoading ? 'btn-loading' : '']" type="button">Create Album</button>
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
                loading : false,
                previewImage: null,
                selectedGenre: {},
                selectedProvince: {},
                selectLanguage: {},
                genre : [],
                genreLoading : false,
                province : [],
                provinceLoading : false,
                language : [],
                languageLoading : false,
                form : new Form({
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
                })
            };
        },

        computed : {
           pageLoading : function ()
           {
                return  this.genreLoading || this.provinceLoading || this.languageLoading;
           }
        },

        methods: {

            submit()
            {
                this.form.genreIDs = this.form.genre.map(e => e.id);
                this.form.languageIDs = this.form.language.map(e => e.id);
                this.form.upload('/site/library/albums').then((response) => {
                    this.$router.push(`/library/albums/${response.data.body.model.id}/view`);
                }).catch((error) => {
                });
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
            }
        },
        mounted()
        {

            this.form.artist = window.user.artist.stage_name;
            this.form.artist_id = window.user.artist.id;

            this.loadGenre();
            this.loadLanguage();
            this.loadProvince();
        }

    }
</script>

<style scoped>

</style>