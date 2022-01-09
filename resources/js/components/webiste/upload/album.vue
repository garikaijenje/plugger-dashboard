<template>

    <div class="row align-content-center justify-content-center mt-5">
        <div class="col-lg-6">
            <div class="p-3 p-border-light">

                <div class="row p-3">
                    <div class="col-lg-4">

                        <div class="">
                            <div class="imagezone" :style="{ 'background-image': `url(${previewImage})` }">
                                <input type="file" id="imageInput" ref="imageInput" class="drag-container" @change="pickFile()" accept="image/*" />
                                <p style="display: flex;align-items: center;justify-content: center" class="text-center">
                                    Drop your images here <br> or click to select
                                </p>
                            </div>

                            <button class="btn btn-primary">Remove</button>
                        </div>

                    </div>
                    <div class="col-lg-8">
                        <div class="sign__group">
                            <label class="text-white small">Name</label>
                            <input type="text" v-model="form.name" name="name" :class="[ 'sign__input' , form.errors.get('name') ? 'is-invalid' : '' ]" placeholder="Enter Album Name" autocomplete="unique-1">
                            <div v-text="form.errors.get('name')" class="main__table-text--red small"/>
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
        data()
        {
            return {
                loading : false,
                previewImage: null,
                form : new Form({
                    email : '',
                    password  :'',
                    otp  :'',
                })
            };
        },
        methods: {
            selectImage () {
                this.$refs.fileInput.click()
            },

            pickFile ()
            {
                let input = this.$refs.imageInput;
                let file = input.files;
                if (file && file[0]){
                    let reader = new FileReader;
                    reader.onload = e => {
                        this.previewImage = e.target.result;
                    }
                    reader.readAsDataURL(file[0]);
                }
            }
        }

    }
</script>

<style scoped>

</style>