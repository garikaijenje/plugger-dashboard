<template>
    <div>
        <div :class="['dimmer' , loading ? 'active' : '']">
            <div class="loader"></div>
            <div class="dimmer-content">

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return {

                loading : true,
            };

        },
        mounted()
        {

        },
        methods : {
            init()
            {
                this.loading = true;
                window.axios.get(`${window.location.origin}/admin/portal/dashboard?start=${this.start}&end=${this.end}&transaction_type=${this.transaction_type}&payment_type=${this.payment_type}`).then((response) => {
                    this.summary = response.data.body.summary;
                }).finally(() => {
                    this.loading = false;
                });
            },

        }
    }
</script>
