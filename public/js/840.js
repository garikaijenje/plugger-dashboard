"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[840],{4840:(t,s,a)=>{a.r(s),a.d(s,{default:()=>n});const i={name:"user-view",data:function(){return{model:{},loading:!0}},methods:{action:function(t){var s=this;window.action(t,"User","".concat(window.location.origin,"/admin/configuration/").concat(this.$route.params.id,"/").concat(t)).then((function(t){s.model=t.data.body.model}))},init:function(){var t=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/admin/configuration/").concat(this.$route.params.id,"/view")).then((function(s){t.model=s.data.body.model})).finally((function(){t.loading=!1}))}},mounted:function(){this.init()}};const n=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:["dimmer",t.loading?"active":""]},[a("div",{staticClass:"loader"}),t._v(" "),a("div",{staticClass:"dimmer-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card ribbon-box "},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex align-items-center mb-3 flex-wrap"},[a("h4",{staticClass:"header-title m-0 flex-fill"},[t._v("Personal Information")]),t._v(" "),a("div",{},[a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:t.init}},[a("i",{staticClass:"mdi mdi-refresh mr-1"}),t._v(" Refresh\n                                ")])])]),t._v(" "),a("div",{staticClass:"text-left"},[a("p",[a("strong",{staticClass:"mr-2"},[t._v("key :")]),t._v(" "),a("span",[t._v(t._s(t.model.key))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Value :")]),t._v(" "),a("span",[t._v(t._s(t.model.value))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v(" Parameters :")]),t._v(" "),a("span",[t._v(t._s(t.model.parameters))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v(" Description :")]),t._v(" "),a("span",[t._v(t._s(t.model.description))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Created :")]),t._v(" "),a("span",[t._v(t._s(t.model.created_at))])])])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=840.js.map