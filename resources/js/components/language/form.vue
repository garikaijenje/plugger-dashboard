<script>
    import Form from "../../core/forms/form";
    import DataSelect from "../core/DataSelect";
    import MultiDataSelect from "../core/MultiDataSelect";
    import TestSelect from "../core/testselect";
    import RolesSelect from "./select";
    export default {
        name: "role-form",
        components: {RolesSelect, TestSelect, MultiDataSelect, DataSelect},
        props: [ 'edit' , 'id' ],
        data(){
            return {
                form : new Form({
                    name : '',
                    description : '',
                }, {
                }),
            };
        },
        mounted() {
            if (this.edit)
            {
                this.init();
            }
        },
        methods: {
            init(){
                this.form.loading = true;
                window.axios.get(`/admin/portal/language/${this.id}/view`).then((response) => {
                    this.form.extract(response.data.body.model);
                    this.form.loading = false;
                });
            },
            create(){
                this.form.submit(this.edit ? `/admin/portal/language/${this.id}/update`  : '/admin/portal/language/create').then((response) => {
                    window.alerts.success(response).then((response) => {
                        if (!this.edit)
                        this.$router.push(`/admin/language/${response.data.body.model.id}/view`);
                    });
                }).catch((error) => {
                }).finally(() => {
                });
            }
        }
    }
</script>
<template>
    <div class="row">
        <div class="col-lg-12">
            <div :class="['dimmer' , form.loading ? 'active' : '']">
                <div class="loader"></div>
                <div class="dimmer-content">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mb-3"> {{ this.edit ? 'Edit' : 'Create' }}  Language</h4>
                            <div class="form-horizontal">
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Name</label>
                                    <div class="col-lg-9">
                                        <input type="text" name="name" v-model="form.name" :class="[ 'form-control mw-400' , form.errors.get('name') ? 'is-invalid' : '' ]" placeholder="Name">
                                        <div v-text="form.errors.get('name')" class="invalid-feedback"/>
                                    </div>
                                </div>

                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Description</label>
                                    <div class="col-lg-9">
                                        <input type="text" name="description" v-model="form.description" :class="[ 'form-control mw-400' , form.errors.get('description') ? 'is-invalid' : '' ]" placeholder="Description">
                                        <div v-text="form.errors.get('description')" class="invalid-feedback"/>
                                    </div>
                                </div>

                                </div>
                                <div class="form-group mb-0 justify-content-end row">
                                    <div class="col-lg-9">
                                        <button type="submit" @click.prevent="create" :class="['btn btn-primary' , form.loading ? 'btn-loading' : '']">{{ this.edit ? 'Edit' : 'Create' }} Language</button>
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
