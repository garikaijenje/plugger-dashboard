"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[575],{3575:(s,t,a)=>{a.r(t),a.d(t,{default:()=>e});const n={name:"user-view",data:function(){return{model:{payment:{},transaction:{}},loading:!0}},methods:{init:function(){var s=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/zesa/").concat(this.$route.params.id,"/view")).then((function(t){s.model=t.data.body.model})).finally((function(){s.loading=!1}))}},mounted:function(){this.init()}};const e=(0,a(1900).Z)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{class:["dimmer",s.loading?"active":""]},[a("div",{staticClass:"loader"}),s._v(" "),a("div",{staticClass:"dimmer-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card ribbon-box "},[a("div",{staticClass:"card-body"},[s._m(0),s._v(" "),s.model.transaction?a("div",{staticClass:"text-left"},[a("p",[a("strong",{staticClass:"mr-2"},[s._v("Transaction  :")]),s._v(" "),a("router-link",{staticClass:"badge badge-light p-2 m-1 font-12",attrs:{to:"/transactions/"+s.model.transaction.id+"/view"}},[s._v("Open Transaction - #"+s._s(s.model.transaction.id))])],1)]):s._e(),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("State :")]),s._v(" "),a("span",[s._v(s._s(s.model.state))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Meter :")]),s._v(" "),a("span",[s._v(s._s(s.model.meter))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Token :")]),s._v(" "),a("span",[s._v(s._s(s.model.token))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Amount :")]),s._v(" "),a("span",[s._v(s._s(s.model.amount))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Rated Amount :")]),s._v(" "),a("span",[s._v(s._s(s.model.rated_amount))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Name :")]),s._v(" "),a("span",[s._v(s._s(s.model.name))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Address :")]),s._v(" "),a("span",[s._v(s._s(s.model.address))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Vat Amount :")]),s._v(" "),a("span",[s._v(s._s(s.model.vatAmount))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Levy  :")]),s._v(" "),a("span",[s._v(s._s(s.model.levy))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Tariff Ref :")]),s._v(" "),a("span",[s._v(s._s(s.model.tariff))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Energy Bought :")]),s._v(" "),a("span",[s._v(s._s(s.model.energyBought))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Receipt Number :")]),s._v(" "),a("span",[s._v(s._s(s.model.receiptNumber))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Energy Charge :")]),s._v(" "),a("span",[s._v(s._s(s.model.energyCharge))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("SMS :")]),s._v(" "),a("span",[s._v(s._s(s.model.sms))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Email :")]),s._v(" "),a("span",[s._v(s._s(s.model.email))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Attempts :")]),s._v(" "),a("span",[s._v(s._s(s.model.attempts))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Aborted :")]),s._v(" "),a("span",[s._v(s._s(s.model.abort))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Last Attempt :")]),s._v(" "),a("span",[s._v(s._s(s.model.last_attempt))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Error :")]),s._v(" "),a("span",[s._v(s._s(s.model.error))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Created :")]),s._v(" "),a("span",[s._v(s._s(s.model.created_at))])]),s._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[s._v("Last :")]),s._v(" "),a("span",[s._v(s._s(s.model.updated_at))])])])])])])])])}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"d-flex align-items-center mb-3 flex-wrap"},[a("h4",{staticClass:"header-title m-0 flex-fill"},[s._v("Transaction Information")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=575.js.map