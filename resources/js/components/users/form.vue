<script>
    import Form from "../../core/forms/form";
    import DataSelect from "../core/DataSelect";
    import MultiDataSelect from "../core/MultiDataSelect";
    import RolesSelect from "../roles/select";
    export default {
        name: "user-form",
        components: {RolesSelect, MultiDataSelect, DataSelect},
        props: [ 'edit' , 'id' ],
        data(){
            return {
                form : new Form({
                    name : '',
                    last_name : '',
                    email : '',
                    phone : '',
                    password : '',
                    type : '',
                    roles : [],
                    permissions : [],
                }, {
                    roles : [],
                    permissions : [],
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
                window.axios.get(`/admin/portal/users/${this.id}/view`).then((response) => {
                    this.form.extract(response.data.body.model);
                    this.form.store('roles' ,response.data.body.model);
                    this.form.store('permissions' ,response.data.body.model);
                    this.form.loading = false;
                });
            },
            create(){
                this.form.submit(this.edit ? `/admin/portal/users/${this.id}/update`  : '/admin/portal/users/create').then((response) => {
                    window.alerts.success(response).then((response) => {
                        if (!this.edit)
                        this.$router.push(`/admin/users/${response.data.body.model.id}/view`);
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
                            <h4 class="mb-3"> {{ this.edit ? 'Edit' : 'Create' }}  User</h4>
                            <div class="form-horizontal">
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">First Name</label>
                                    <div class="col-lg-9">
                                        <input type="text" name="name" v-model="form.name" :class="[ 'form-control mw-400' , form.errors.get('name') ? 'is-invalid' : '' ]" placeholder="First Name">
                                        <div v-text="form.errors.get('name')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Last Name</label>
                                    <div class="col-lg-9">
                                        <input type="text" name="last_name" v-model="form.last_name" :class="[ 'form-control mw-400' , form.errors.get('last_name') ? 'is-invalid' : '' ]" placeholder="Last Name">
                                        <div v-text="form.errors.get('last_name')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Email</label>
                                    <div class="col-lg-9">
                                        <input type="email" name="email" v-model="form.email" :class="[ 'form-control mw-400' , form.errors.get('email') ? 'is-invalid' : '' ]" placeholder="Email">
                                        <div v-text="form.errors.get('email')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Email</label>
                                    <div class="col-lg-9">
                                        <input type="text" name="phone" v-model="form.phone" :class="[ 'form-control mw-400' , form.errors.get('phone') ? 'is-invalid' : '' ]" placeholder="Phone">
                                        <div v-text="form.errors.get('phone')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Type</label>
                                    <div class="col-lg-9">
                                        <select type="text" name="type" v-model="form.type" :class="[ 'form-control mw-400' , form.errors.get('type') ? 'is-invalid' : '' ]">
                                            <option value="">Choose Type</option>
                                            <option value="artist">artist</option>
                                            <option value="zimura">zimura</option>
                                            <option value="radio">radio</option>
                                            <option value="tv">tv</option>
                                            <option value="admin">admin</option>
                                            <option value="individual">individual</option>
                                        </select>
                                        <div v-text="form.errors.get('type')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div v-if="!edit" class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Password</label>
                                    <div class="col-lg-9">
                                        <input type="password" name="password" v-model="form.password" :class="[ 'form-control mw-400' , form.errors.get('password') ? 'is-invalid' : '' ]" placeholder="Password">
                                        <div v-text="form.errors.get('password')" class="invalid-feedback"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Roles</label>
                                    <div class="col-lg-9">
                                        <multi-data-select :start="form.storage.roles" select="name" v-model="form.roles" name="Roles" url="/admin/portal/roles" prefix="roles">
                                            <template slot="select" slot-scope="data">
                                               <roles-select :data="data"/>
                                            </template>
                                        </multi-data-select>
                                        <div v-text="form.errors.get('roles')" class="text-danger font-12"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-3 align-items-center">
                                    <label class="col-lg-3 col-form-label">Permissions</label>
                                    <div class="col-lg-9">
                                        <multi-data-select select="name" :start="form.storage.permissions"  v-model="form.permissions" name="Permissions" url="/admin/portal/permissions" prefix="permissions">
                                            <template slot="select" slot-scope="data">
                                                <roles-select :data="data"/>
                                            </template>
                                        </multi-data-select>
                                        <div v-text="form.errors.get('permissions')" class="text-danger font-12"/>
                                    </div>
                                </div>
                                <div class="form-group mb-0 justify-content-end row">
                                    <div class="col-lg-9">
                                        <button type="submit" @click.prevent="create" :class="['btn btn-primary' , form.loading ? 'btn-loading' : '']">{{ this.edit ? 'Edit' : 'Create' }} User</button>
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
