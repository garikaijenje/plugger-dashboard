<script>
    import PageIndex from "../core/page-index";
    export default {
        components: {PageIndex}
    }
</script>
<template>
    <page-index url="/admin/portal/configuration" prefix="list" name="Configuration">
        <template slot-scope="data" slot="filters">

        </template>
        <template slot="sort-fields">
            <option value="created_at">Created</option>
            <option value="updated_at">Updated</option>
        </template>
        <template slot="table-header">
            <th></th>
            <th>key</th>
            <th>Value</th>
            <th>description</th>
            <th>Type</th>
            <th class="text-center"></th>
        </template>
        <template slot="table-row" slot-scope="data">
            <td>
                <span class="text-primary">#{{ data.row.id }}</span>
            </td>
            <td>{{ data.row.key }}</td>
            <td>{{ data.row.value }}</td>
            <td>{{ data.row.description }}</td>
            <td>{{ data.row.parameters }}</td>
            <td>{{ data.row.created_at }}</td>
            <td>
                <router-link :to="`/admin/configuration/${data.row.id}/view`" class="action-icon text-primary">
                    <i class="mdi mdi-eye mdi-24px"/>
                </router-link>
            </td>
        </template>
    </page-index>
</template>
