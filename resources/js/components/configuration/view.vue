<script>
    export default {
        name: "user-view",
        data() {
            return {
                model: {
                },
                loading: true
            };
        },
        methods : {
            action(action){
                window.action(action , 'User' , `${window.location.origin}/admin/portal/configuration/${this.$route.params.id}/${action}`).then((response) => {
                    this.model = response.data.body.model;
                });
            },
            init(){
                this.loading = true;
                window.axios.get(`${window.location.origin}/admin/portal/configuration/${this.$route.params.id}/view`).then((response) => {
                    this.model = response.data.body.model;
                }).finally(() => {
                    this.loading = false;
                });
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
<template>
    <div :class="['dimmer' , loading ? 'active' : '']">
        <div class="loader"></div>
        <div class="dimmer-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card ribbon-box ">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3 flex-wrap">
                                <h4 class="header-title m-0 flex-fill">Personal Information</h4>
                                <div class="">
                                    <button  @click="init" type="button" class="btn btn-light m-1">
                                        <i class="mdi mdi-refresh mr-1"></i> Refresh
                                    </button>
                                </div>
                            </div>
                            <div class="text-left">
                                <p>
                                    <strong class="mr-2">key :</strong>
                                    <span>{{ model.key }}</span>
                                </p>
                                <p>
                                    <strong class="mr-2">Value :</strong>
                                    <span>{{ model.value }}</span>
                                </p>
                                <p>
                                    <strong class="mr-2"> Parameters :</strong>
                                    <span>{{ model.parameters }}</span>
                                </p>
                                <p>
                                    <strong class="mr-2"> Description :</strong>
                                    <span>{{ model.description }}</span>
                                </p>
                                <p>
                                    <strong class="mr-2">Created :</strong>
                                    <span>{{ model.created_at }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
