<script>
    import PageOpen from "../core/page-open";
    export default {
        name: "user-open",
        components: {PageOpen},
    }
</script>
<template>
    <page-open>
        <template slot="links">
            <li class="nav-item">
                <router-link exact :to="`/admin/province/${$route.params.id}/view`" active-class="active" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                    <i class="mdi mdi-eye font-18 "></i>
                    <span class="d-none d-lg-block">View</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link exact  :to="`/admin/province/${$route.params.id}/edit`" active-class="active" data-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
                    <i class="mdi mdi-circle-edit-outline font-18 "></i>
                    <span class="d-none d-lg-block">Edit</span>
                </router-link>
            </li>
        </template>
    </page-open>
</template>
