"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5802],{5802:(t,s,a)=>{a.r(s),a.d(s,{default:()=>i});const n={name:"user-view",data:function(){return{window,model:{payment:{},transaction:{}},loading:!0}},methods:{init:function(){var t=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/admin/portal/zesa/").concat(this.$route.params.id,"/view")).then((function(s){t.model=s.data.body.model})).finally((function(){t.loading=!1}))},action:function(t){var s=this;window.action(t,"Zesa","".concat(window.location.origin,"/admin/portal/zesa/").concat(this.$route.params.id,"/").concat(t)).then((function(t){s.model=t.data.body.model}))}},mounted:function(){this.init()}};const i=(0,a(1900).Z)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:["dimmer",t.loading?"active":""]},[a("div",{staticClass:"loader"}),t._v(" "),a("div",{staticClass:"dimmer-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card ribbon-box "},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex align-items-center mb-3 flex-wrap"},[a("h4",{staticClass:"header-title m-0 flex-fill"},[t._v("Zesa Information")]),t._v(" "),a("div",{},[a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:t.init}},[a("i",{staticClass:"mdi mdi-reload mr-1"}),t._v(" Refresh\n                                ")]),t._v(" "),"COMPLETED"!==t.model.state?a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("abort")}}},[a("i",{staticClass:"mdi mdi-lightbulb-off mr-1"}),t._v(" Abort\n                                ")]):t._e(),t._v(" "),"COMPLETED"!==t.model.state?a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("retry")}}},[a("i",{staticClass:"mdi mdi-refresh mr-1"}),t._v(" Retry Token\n                                ")]):t._e(),t._v(" "),"COMPLETED"!==t.model.state?a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("reset")}}},[a("i",{staticClass:"mdi mdi-link-off mr-1"}),t._v(" Reset Zesa For Queue\n                                ")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("sms")}}},[a("i",{staticClass:"mdi mdi-text mr-1"}),t._v(" Send Token SMS\n                                ")]),t._v(" "),a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("email")}}},[a("i",{staticClass:"mdi mdi-mail mr-1"}),t._v(" Send Token Email\n                                ")]),t._v(" "),t.model.pdf?a("a",{staticClass:"btn btn-light m-1",attrs:{href:t.window.location.origin+"/admin/portal/zesa/"+t.$route.params.id+"/download",target:"_blank",type:"button"}},[a("i",{staticClass:"mdi mdi-download mr-1"}),t._v(" Download Receipt\n                                ")]):t._e(),t._v(" "),t.model.pdf?t._e():a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("generate")}}},[a("i",{staticClass:"mdi mdi-download mr-1"}),t._v(" Generate Receipt\n                                ")])])]),t._v(" "),t.model.transaction?a("div",{staticClass:"text-left"},[a("p",[a("strong",{staticClass:"mr-2"},[t._v("Transaction  :")]),t._v(" "),a("router-link",{staticClass:"badge badge-light p-2 m-1 font-12",attrs:{to:"/admin/transactions/"+t.model.transaction.id+"/view"}},[t._v("Transaction - #"+t._s(t.model.transaction.id))])],1)]):t._e(),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("State :")]),t._v(" "),a("span",[t._v(t._s(t.model.state))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Meter :")]),t._v(" "),a("span",[t._v(t._s(t.model.meter))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Token :")]),t._v(" "),a("span",[t._v(t._s(t.model.token))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Amount :")]),t._v(" "),a("span",[t._v(t._s(t.model.amount))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Rated Amount :")]),t._v(" "),a("span",[t._v(t._s(t.model.rated_amount))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Name :")]),t._v(" "),a("span",[t._v(t._s(t.model.name))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Address :")]),t._v(" "),a("span",[t._v(t._s(t.model.address))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Vat Amount :")]),t._v(" "),a("span",[t._v(t._s(t.model.vatAmount))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Levy  :")]),t._v(" "),a("span",[t._v(t._s(t.model.levy))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Tariff Ref :")]),t._v(" "),a("span",[t._v(t._s(t.model.tariff))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Energy Bought :")]),t._v(" "),a("span",[t._v(t._s(t.model.energyBought))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Receipt Number :")]),t._v(" "),a("span",[t._v(t._s(t.model.receiptNumber))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Energy Charge :")]),t._v(" "),a("span",[t._v(t._s(t.model.energyCharge))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("SMS :")]),t._v(" "),a("span",[t._v(t._s(t.model.sms))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Email :")]),t._v(" "),a("span",[t._v(t._s(t.model.email))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Attempts :")]),t._v(" "),a("span",[t._v(t._s(t.model.attempts))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Aborted :")]),t._v(" "),a("span",[t._v(t._s(t.model.abort))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Last Attempt :")]),t._v(" "),a("span",[t._v(t._s(t.model.last_attempt))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Error :")]),t._v(" "),a("span",[t._v(t._s(t.model.error))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Created :")]),t._v(" "),a("span",[t._v(t._s(t.model.created_at))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Last :")]),t._v(" "),a("span",[t._v(t._s(t.model.updated_at))])])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=5802.js.map