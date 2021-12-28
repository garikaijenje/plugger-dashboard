"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4084],{4084:(t,a,s)=>{s.r(a),s.d(a,{default:()=>i});const e={name:"dashboard",data:function(){return{start:"",transaction_type:"",payment_type:"",end:"",summary:{details:[]},loading:!0,agentBalance:"--.--",agentLoading:!0}},mounted:function(){this.init(),this.agent()},methods:{init:function(){var t=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/admin/portal/dashboard?start=").concat(this.start,"&end=").concat(this.end,"&transaction_type=").concat(this.transaction_type,"&payment_type=").concat(this.payment_type)).then((function(a){t.summary=a.data.body.summary})).finally((function(){t.loading=!1}))},agent:function(){var t=this;this.agentLoading=!0,window.axios.get("".concat(window.location.origin,"/admin/portal/dashboard/agent")).then((function(a){t.agentBalance=a.data.body.agentBalance})).finally((function(){t.agentLoading=!1}))}}};const i=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{class:["dimmer",t.loading?"active":""]},[s("div",{staticClass:"loader"}),t._v(" "),s("div",{staticClass:"dimmer-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body d-flex align-items-start flex-wrap"},[s("div",{staticClass:"app-search m-1 flex-fill"},[s("div",[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.start,expression:"start"}],staticClass:"form-control bg-white border",attrs:{type:"date"},domProps:{value:t.start},on:{input:function(a){a.target.composing||(t.start=a.target.value)}}}),t._v(" "),s("span",{staticClass:"mdi mdi mdi-calendar-arrow-right"}),t._v(" "),t._m(0)])])]),t._v(" "),s("div",{staticClass:"app-search m-1"},[s("div",[s("div",{staticClass:"input-group flex-fill"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.end,expression:"end"}],staticClass:"form-control bg-white border",attrs:{type:"date"},domProps:{value:t.end},on:{input:function(a){a.target.composing||(t.end=a.target.value)}}}),t._v(" "),s("span",{staticClass:"mdi mdi mdi-calendar-arrow-left"}),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"app-search m-1"},[s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.transaction_type,expression:"transaction_type"}],staticClass:"custom-select",attrs:{type:"text"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.transaction_type=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("Choose Transaction Type")]),t._v(" "),s("option",{attrs:{selected:"",value:"App\\Zesa"}},[t._v("Zesa")]),t._v(" "),s("option",{attrs:{selected:"",value:"App\\Airtime"}},[t._v("Airtime")])])])]),t._v(" "),s("div",{staticClass:"app-search m-1"},[s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.payment_type,expression:"payment_type"}],staticClass:"custom-select",attrs:{type:"text"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.payment_type=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("Choose Payment Type")]),t._v(" "),s("option",{attrs:{selected:"",value:"App\\EcocashPayment"}},[t._v("Ecocash")]),t._v(" "),s("option",{attrs:{selected:"",value:"App\\StripePayment"}},[t._v("Stripe")]),t._v(" "),s("option",{attrs:{selected:"",value:"App\\ManualPayment"}},[t._v("Manual")])])])]),t._v(" "),s("div",{staticClass:"m-1"},[s("button",{staticClass:"btn btn-primary",on:{click:t.init}},[t._v("Refresh Dashboard")])])])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"card widget-inline"},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"row g-0"},[s("div",{staticClass:"col-sm-6 col-xl-3"},[s("div",{staticClass:"card shadow-none m-0"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v(t._s(t.summary.total))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("Total")])])])]),t._v(" "),s("div",{staticClass:"col-sm-6 col-xl-3"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v(t._s(t.summary.completed))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("Completed")])])])]),t._v(" "),s("div",{staticClass:"col-sm-6 col-xl-3"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v(t._s(t.summary.failed))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("Failed")])])])]),t._v(" "),s("div",{staticClass:"col-sm-6 col-xl-3"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v(t._s(t.summary.sla)+" %")]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("SLA")])])])]),t._v(" "),s("div",{staticClass:"col-sm-6 col-xl-4"},[s("div",{class:["dimmer",t.agentLoading?"active":""]},[s("div",{staticClass:"loader"}),t._v(" "),s("div",{staticClass:"dimmer-content"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v(" "+t._s(t.agentBalance))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-1"},[t._v("Netone Agent Balance")]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[s("button",{staticClass:"btn btn-sm btn-primary",on:{click:t.agent}},[t._v("Refresh")])])])])])])])])])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"card widget-inline"},[s("div",{staticClass:"card-body p-0"},[s("div",{staticClass:"row g-0"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v("ZWL "+t._s(t.summary.total_zwl))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("Total ZWL")])])])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card shadow-none m-0 border-start"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"display-4"},[t._v("USD "+t._s(t.summary.total_usd))]),t._v(" "),s("p",{staticClass:"text-muted font-15 mb-0"},[t._v("Total USD")])])])])])])])]),t._v(" "),s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card"},[t._m(2),t._v(" "),t.loading?t._e():s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-centered mb-0 font-10"},[t._m(3),t._v(" "),s("tbody",t._l(t.summary.details,(function(a){return s("tr",[s("td"),t._v(" "),s("td",[t._v(t._s(a.transaction_type))]),t._v(" "),s("td",[t._v(t._s(a.type_count))]),t._v(" "),s("td",[t._v(t._s(a.payment_type))]),t._v(" "),s("td",[t._v(t._s(a.payment_count))]),t._v(" "),s("td",[s("strong",[t._v(t._s(a.state))])]),t._v(" "),s("td",[t._v(t._s(a.state_count))]),t._v(" "),s("td",[t._v(t._s(a.channel))]),t._v(" "),s("td",[t._v(t._s(a.channel_count))]),t._v(" "),s("td",[t._v(t._s(a.scope))]),t._v(" "),s("td",[t._v(t._s(a.scope_count))]),t._v(" "),s("td",[t._v(t._s(a.currency))]),t._v(" "),s("td",[t._v(t._s(a.currency_count))]),t._v(" "),s("td",[t._v(t._s(a.currency)+" "+t._s(a.amount_sum))]),t._v(" "),s("td",[s("strong",[t._v(" ZWL "+t._s(a.rated_sum)+" ")])]),t._v(" "),s("td")])})),0)])]),t._v(" "),s("div",{staticClass:"card-body border-top"})])])])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary shadow-none",attrs:{type:"submit",disabled:""}},[t._v("Start Date")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary shadow-none",attrs:{type:"submit",disabled:""}},[t._v("End Date")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"header-title mt-2 text-center"},[t._v("Transactions Summary")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"thead-light"},[s("tr",[s("th"),t._v(" "),s("th",[t._v("Transaction Type")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("Payment Type")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("State")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("Channel")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("Scope")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("Currency")]),t._v(" "),s("th",[t._v("Count")]),t._v(" "),s("th",[t._v("Sum")]),t._v(" "),s("th",[t._v("Rated Sum")]),t._v(" "),s("th")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=4084.js.map