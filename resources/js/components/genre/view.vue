<script>
    export default {
        name: "user-view",
        data() {
            return {
                model : {
                },
                loading: true
            };
        },
        methods : {
            init(){
                this.loading = true;
                window.axios.get(`${window.location.origin}/admin/portal/genre/${this.$route.params.id}/view`).then((response) => {
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
                                <h4 class="header-title m-0 flex-fill"> Information</h4>
                            </div>
                            <div class="text-left">
                                <p>
                                    <strong class="mr-2">Name :</strong>
                                    <span>{{ model.name }}</span>
                                </p>
                                <p>
                                    <strong class="mr-2">Description :</strong>
                                    <span>{{ model.description }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
