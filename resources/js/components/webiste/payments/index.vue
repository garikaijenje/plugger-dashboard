<template>
    <div class="row">
        <div class="col-12">
            <ul class="breadcrumb bg-transparent">
                <li class="breadcrumb__item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb__item">My Library</li>
                <li class="breadcrumb__item breadcrumb__item--active">Payments</li>
            </ul>
        </div>
        <div class="col-12">
            <div class="p-border-light p-3 rounded text-center d-flex align-items-center">
                <div class="mr-auto">
                    <form @submit.prevent="data.fetch()" class="main__filter-search">
                        <input type="text" placeholder="Search..." v-model="data.filters.search">
                        <button type="button"><i class="mdi mdi-magnify text-white mdi-18px"></i></button>
                    </form>
                </div>
                <div class="ml-auto d-flex align-items-center">
                    <div class="mr-3 text-white">Showing </div>
                    <select @change="data.fetch()" v-model="data.filters.size" style="width: auto;height: 35px" class="sign__input mr-3">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <div class="mr-3 text-white">Sort By </div>
                    <select @change="data.fetch()" v-model="data.sort.field" style="width: auto;height: 35px" class="sign__input mr-1">
                        <option value="id">ID</option>
                    </select>
                    <select @change="data.fetch()" v-model="data.sort.direction" style="width: auto;height: 35px" class="sign__input mr-3">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    <button @click.prevent="data.fetch()" :class="['btn btn-primary btn-sm' , data.loading ? 'btn-loading' : '']"><i class="mdi mdi-refresh mr-2"></i>Refresh</button>
                </div>
            </div>
        </div>
       <div class="col-12">
           <div class="">
                    <div class="">
                        <div class="">
                            <table class="main__table mt-4">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>State</th>
                                    <th>Amount</th>
                                    <th>Ref</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Date Created</th>
                                    <th>Date Completed</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="row in data.content.data">
                                    <td>
                                        <div class="main__table-text text-primary">
                                            #{{ row.id }}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.state }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.amount }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.ref }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.name }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.phone }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">{{ row.email }}</div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">
                                            {{ row.created_at }}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="main__table-text">
                                            {{ row.completed_at }}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <router-link :to="`/library/payments/${row.id}/view`" class="single-item__export mr-3" type="button">
                                                <i class="mdi mdi-eye mdi-24px"></i>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           <div v-if="data.content.total !== data.content.to && data.content.data.length > 0" class="d-flex align-items-center justify-content-center mt-4">
               <button @click="data.append()" :class="['btn btn-primary btn-sm' , data.loading ? 'btn-loading' : '']" >Load more</button>
           </div>
       </div>
    </div>
</template>

<script>
    import Data from "../../../core/data/Data";

    export default {
        name: "dashboard",
        data(){
            return {
                data :  new Data({
                    url : '/site/library/payments',
                    prefix : 'list'
                })
            };
        },
        mounted() {



            this.data.fetch();
        },
    }
</script>
