<template>
    <div>
        <div :class="['dimmer' , loading ? 'active' : '']">
            <div class="loader"></div>
            <div class="dimmer-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card border-0">
                            <div class="card-body d-flex align-items-start flex-wrap">
                                <div class="app-search m-1 flex-fill">
                                    <div>
                                        <div class="input-group"><input type="date" v-model="start" class="form-control bg-white border">
                                            <span class="mdi mdi mdi-calendar-arrow-right"></span>
                                            <div class="input-group-append">
                                                <button type="submit" disabled class="btn btn-primary shadow-none">Start Date</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="app-search m-1">
                                    <div>
                                        <div class="input-group flex-fill">
                                            <input type="date" v-model="end" class="form-control bg-white border">
                                            <span class="mdi mdi mdi-calendar-arrow-left"></span>
                                            <div class="input-group-append">
                                                <button type="submit" disabled class="btn btn-primary shadow-none">End Date</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="app-search m-1">
                                    <div>
                                        <select type="text" v-model="transaction_type" class="custom-select">
                                            <option value="">Choose Transaction Type</option>
                                            <option selected value="App\Zesa">Zesa</option>
                                            <option selected value="App\Airtime">Airtime</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="app-search m-1">
                                    <div>
                                        <select type="text" v-model="payment_type" class="custom-select">
                                            <option value="">Choose Payment Type</option>
                                            <option selected value="App\EcocashPayment">Ecocash</option>
                                            <option selected value="App\StripePayment">Stripe</option>
                                            <option selected value="App\ManualPayment">Manual</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="m-1">
                                    <button @click="init" class="btn btn-primary">Refresh Dashboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card widget-inline">
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card shadow-none m-0">
                                            <div class="card-body text-center">
                                                <div class="display-4">{{ summary.total }}</div>
                                                <p class="text-muted font-15 mb-0">Total</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card shadow-none m-0 border-start">
                                            <div class="card-body text-center">
                                                <div class="display-4">{{ summary.completed }}</div>
                                                <p class="text-muted font-15 mb-0">Completed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card shadow-none m-0 border-start">
                                            <div class="card-body text-center">
                                                <div class="display-4">{{ summary.failed }}</div>
                                                <p class="text-muted font-15 mb-0">Failed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-xl-3">
                                        <div class="card shadow-none m-0 border-start">
                                            <div class="card-body text-center">
                                                <div class="display-4">{{ summary.sla }} %</div>
                                                <p class="text-muted font-15 mb-0">SLA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xl-4">
                                        <div :class="['dimmer' , agentLoading ? 'active' : '']">
                                            <div class="loader"></div>
                                            <div class="dimmer-content">
                                                <div class="card shadow-none m-0 border-start">
                                                    <div class="card-body text-center">
                                                        <div class="display-4"> {{ agentBalance }}</div>
                                                        <p class="text-muted font-15 mb-1">Netone Agent Balance</p>
                                                        <p class="text-muted font-15 mb-0"><button @click="agent" class="btn btn-sm btn-primary">Refresh</button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-xl-4">
                                        <div :class="['dimmer' , agentEconetLoading ? 'active' : '']">
                                            <div class="loader"></div>
                                            <div class="dimmer-content">
                                                <div class="card shadow-none m-0 border-start">
                                                    <div class="card-body text-center">
                                                        <div class="display-4"> {{ agentEconetBalance }}</div>
                                                        <p class="text-muted font-15 mb-1">Econet Agent Balance</p>
                                                        <p class="text-muted font-15 mb-0"><button @click="econet" class="btn btn-sm btn-primary">Refresh</button></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- end row -->
                            </div>
                        </div> <!-- end card-box-->
                    </div>
                    <div class="col-12">
                        <div class="card widget-inline">
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card shadow-none m-0 border-start">
                                            <div class="card-body text-center">
                                                <div class="display-4">ZWL {{ summary.total_zwl }}</div>
                                                <p class="text-muted font-15 mb-0">Total ZWL</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="card shadow-none m-0 border-start">
                                            <div class="card-body text-center">
                                                <div class="display-4">USD {{ summary.total_usd }}</div>
                                                <p class="text-muted font-15 mb-0">Total USD</p>
                                            </div>
                                        </div>
                                    </div>

                                </div> <!-- end row -->
                            </div>
                        </div> <!-- end card-box-->
                    </div>
                    <div v-if=""  class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="header-title mt-2 text-center">Transactions Summary</h5>
                            </div>
                            <div v-if="!loading" class="table-responsive">
                                <table class="table table-centered mb-0 font-10">
                                    <thead class="thead-light">
                                    <tr>
                                        <th/>
                                        <th>Transaction Type</th>
                                        <th>Count</th>
                                        <th>Payment Type</th>
                                        <th>Count</th>
                                        <th>State</th>
                                        <th>Count</th>
                                        <th>Channel</th>
                                        <th>Count</th>
                                        <th>Scope</th>
                                        <th>Count</th>
                                        <th>Currency</th>
                                        <th>Count</th>
                                        <th>Sum</th>
                                        <th>Rated Sum</th>
                                        <th/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in summary.details">
                                        <td/>
                                        <td>{{ item.transaction_type }}</td>
                                        <td>{{ item.type_count }}</td>
                                        <td>{{ item.payment_type }}</td>
                                        <td>{{ item.payment_count }}</td>
                                        <td> <strong>{{ item.state }}</strong></td>
                                        <td>{{ item.state_count }}</td>
                                        <td>{{ item.channel }}</td>
                                        <td>{{ item.channel_count }}</td>
                                        <td>{{ item.scope }}</td>
                                        <td>{{ item.scope_count }}</td>
                                        <td>{{ item.currency }}</td>
                                        <td>{{ item.currency_count }}</td>
                                        <td>{{ item.currency  }} {{ item.amount_sum }}</td>
                                        <td> <strong> ZWL {{ item.rated_sum }} </strong></td>
                                        <td/>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-body border-top">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return {
                start: "",
                transaction_type: "",
                payment_type: "",
                // start: "2021-05-13",
                end: "",
                // end: "2021-05-13",
                summary : {
                    details : []
                },
                loading : true,
                agentBalance : '--.--',
                agentEconetBalance : '--.--',
                agentLoading : true,
                agentEconetLoading : true,
            };

        },
        mounted()
        {
            this.init();
            this.agent();
            this.econet();
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

            agent()
            {
                this.agentLoading = true;
                window.axios.get(`${window.location.origin}/admin/portal/dashboard/agent`).then((response) => {
                    this.agentBalance = response.data.body.agentBalance;
                }).finally(() => {
                    this.agentLoading = false;
                });
            },

            econet()
            {
                this.agentEconetLoading = true;
                window.axios.get(`${window.location.origin}/admin/portal/dashboard/econet`).then((response) => {
                    this.agentEconetBalance = response.data.body.agentBalance;
                }).finally(() => {
                    this.agentEconetLoading = false;
                });
            }
        }
    }
</script>
