<template>
    <div class="row">

        <div class="col-lg-12">

        </div>

    </div>
</template>

<script>
    export default {
        name: "dashboard",
        mounted()
        {
            let uri = window.location.search.substring(1);
            let params = new URLSearchParams(uri);
            let context = params.get('context');
            if (context)
            {
                if (context === "paynow")
                {
                    let id = params.get('id');
                    // this.$router.push(`/payments/${id}/view`);
                    this.$router.push(`/payments`);
                }
            }
        }
    }
</script>
