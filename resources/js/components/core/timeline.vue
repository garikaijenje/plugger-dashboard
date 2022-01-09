<script>

    import Data from "../../core/data/Data";

    export default {
        name: "timeline-model",
        props : ['url' , 'name' , 'model' , 'id'],
        components: {
        },
        data() {
            return {
                report: {},
                loading: false,
                showStatistics: false,
                data : new Data({
                    url : '/admin/portal/audits',
                    prefix : 'audits',
                    other: 'statistics',
                }),
                groups : [
                ]
            };
        },
        methods : {
            init()
            {
                this.data.filters['auditable_type'] = this.model;
                this.data.filters['auditable_id'] = this.id;
                this.data.fetch();
            },
        },
        mounted()
        {
            this.init();
        }
    }
</script>
<template>
    <div :class="['dimmer' , loading  ? 'active' : '']">
        <div class="loader"></div>
        <div class="dimmer-content">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="card">
                        <form @submit.prevent="data.fetch()" class="card-body">
                            <div class="d-flex flex-fill">
                                <div class="mr-1">
                                    <select v-model="data.filters['event']" class="custom-select">
                                        <option :value="undefined">Choose Event</option>
                                        <option value="create">Create</option>
                                        <option value="update">Update</option>
                                    </select>
                                </div>
                                <div class="d-flex align-items-center mr-1">
                                    <div class="app-search flex-fill">
                                        <div>
                                            <div class="input-group"><input type="date" v-model="data.filters['startDate']" class="form-control bg-white border">
                                                <span class="mdi mdi mdi-calendar-arrow-right"></span>
                                                <div class="input-group-append">
                                                    <button type="submit" disabled :class="['btn' ,'btn-primary shadow-none']">Start Date</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mr-1">
                                    <div class="app-search flex-fill">
                                        <div>
                                            <div class="input-group"><input type="date" v-model="data.filters['endDate']" class="form-control bg-white border">
                                                <span class="mdi mdi mdi-calendar-arrow-right"></span>
                                                <div class="input-group-append">
                                                    <button type="submit" disabled :class="['btn' ,'btn-primary shadow-none']">End Date</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-fill ">
                                    <div class="flex-fill">
                                        <div class="app-search">
                                            <div>
                                                <div class="input-group">
                                                    <input type="text" v-model="data.filters.search" placeholder="Search..." class="form-control">
                                                    <span class="mdi mdi-magnify"></span>
                                                    <div class="input-group-append">
                                                        <button type="submit" @click.prevent="data.fetch()" :class="['btn btn-primary' , data.loading ? 'btn-loading' : '' ]">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ml-1">
                                        <button @click="data.fetch()" :class="['btn btn-primary px-3' , data.loading ? 'btn-loading' : '' ]">
                                            <i class="mdi mdi-autorenew"></i>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center flex-wrap">
                                <div class="h4 m-o">
                                    {{ name }}
                                </div>
                                <div class="ml-auto mr-3 d-flex align-items-center">
                                    <div class="mr-2">Showing</div>
                                    <div class="form-group mb-0">
                                        <select @change="data.fetch()" v-model="data.filters.size" class="custom-select">
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="25">25</option>
                                            <option value="30">30</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mr-3 d-flex align-items-center">
                                    <div class="mr-2">Sort By</div>
                                    <div class="form-group mb-0">
                                        <select @change="data.fetch()" v-model="data.sort.field" class="custom-select">
                                            <option value="id">ID</option>
                                            <slot name="sort-fields"/>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="form-group mb-0">
                                        <select @change="data.fetch()" v-model="data.sort.direction" class="custom-select">
                                            <option value="asc">Ascending</option>
                                            <option value="desc">Descending</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-11">
                    <div class="">
                        <div class="media d-block d-lg-flex">
                            <div class="media-body">
                                <div class="timeline-group tx-13">
                                    <div class="timeline-label py-5"></div>
                                    <div :key="item.id" v-for="item in data.content.data" class="timeline-item">
                                        <div class="timeline-time">
                                            <strong>{{ item.created_at_read }} <br> {{ item.last_update }}</strong>
                                        </div>
                                        <div class="timeline-body">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="h6 mg-b-0 d-flex">
                                                        <div>
                                                            {{ item.event }} : {{ item.user ? item.user.name + ' ' + item.user.last_name   : 'Root System' }} - {{ item.user ? item.user.email : 'root@steward.co.zw' }} - <span class="text-primary">#{{ item.user ? item.user.id : 'ROOT' }}</span>
                                                        </div>
                                                    </div>
                                                    <h6 class="mg-b-0"><span class="text-primary">#{{ item.auditable_id }}</span> {{ item.auditable_type }}</h6>
                                                    <p class="mb-3">
                                                        <span class="text-muted">IP : </span> {{ item.ip_address }}<br>
                                                        <span class="text-muted">User Agent : </span> {{ item.user_agent }}<br>
                                                        <span class="text-muted">Url : </span> <span class="text-primary"> {{ item.url }} </span> <br>
                                                    </p>
                                                    <table v-if="Object.entries(item.old_values).length > 0 || Object.entries(item.new_values).length > 0 " class="table border-bottom border-right border-left">
                                                        <thead>
                                                        <tr>
                                                            <th v-if="Object.entries(item.old_values).length > 0" class="w-50">Old</th>
                                                            <th v-if="Object.entries(item.new_values).length > 0 " class="w-50">New</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td  v-if="Object.entries(item.old_values).length > 0"  class="">
                                                                <div :key="`${i}-${k}-${item.id}-old-values`" v-for="(i , k ) in item.old_values"><span class="text-muted">{{ k.replace('_',' ') }} : </span>{{ i |  string_limit(50) }}</div>
                                                            </td>

                                                            <td v-if="Object.entries(item.new_values).length > 0 "  class="">
                                                                <div :key="`${i}-${k}-${item.id}-new-values`" v-for="(i , k ) in item.new_values"><span class="text-muted">{{ k.replace('_',' ') }} : </span>{{ i  |  string_limit(50)  }}</div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="timeline-label pb-4 pt-4">
                                        <button @click="data.append()" v-if="data.content.total !== data.content.to && data.content.data.length > 0" :class="['btn btn-primary btn-sm' , data.loading ? 'btn-loading' :'']">
                                            <i class="mdi mdi-arrow-down mr-1"></i> Load More
                                        </button>
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
