"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[911],{2911:(t,s,a)=>{a.r(s),a.d(s,{default:()=>n});const i={name:"user-view",data:function(){return{user:{roles:[],permissions:[]},loading:!0}},methods:{action:function(t){var s=this;window.action(t,"User","".concat(window.location.origin,"/admin/portal/users/").concat(this.$route.params.id,"/").concat(t)).then((function(t){s.user=t.data.body.model}))},init:function(){var t=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/admin/portal/users/").concat(this.$route.params.id,"/view")).then((function(s){t.user=s.data.body.model})).finally((function(){t.loading=!1}))}},mounted:function(){this.init()}};const n=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:["dimmer",t.loading?"active":""]},[a("div",{staticClass:"loader"}),t._v(" "),a("div",{staticClass:"dimmer-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card ribbon-box "},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex align-items-center mb-3 flex-wrap"},[a("h4",{staticClass:"header-title m-0 flex-fill"},[t._v("Personal Information")]),t._v(" "),a("div",{},[t.user.status?t._e():a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("activate")}}},[a("i",{staticClass:"mdi mdi-lightbulb-outline mr-1"}),t._v(" Activate\n                                ")]),t._v(" "),t.user.status?a("button",{staticClass:"btn btn-light m-1",attrs:{type:"button"},on:{click:function(s){return t.action("deactivate")}}},[a("i",{staticClass:"mdi mdi-lightbulb-off-outline mr-1"}),t._v(" De-Activate\n                                ")]):t._e()])]),t._v(" "),a("div",{staticClass:"text-left"},[a("p",[a("strong",{staticClass:"mr-2"},[t._v("First Name :")]),t._v(" "),a("span",[t._v(t._s(t.user.name))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Last Name :")]),t._v(" "),a("span",[t._v(t._s(t.user.last_name))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v(" Email :")]),t._v(" "),a("span",[t._v(t._s(t.user.email))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v(" Phone :")]),t._v(" "),a("span",[t._v(t._s(t.user.phone))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v(" Type :")]),t._v(" "),a("span",[t._v(t._s(t.user.type))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Created :")]),t._v(" "),a("span",[t._v(t._s(t.user.created_at))])]),t._v(" "),a("p",[a("strong",{staticClass:"mr-2"},[t._v("Status :")]),t._v(" "),a("span",[a("span",{staticClass:"badge badge-light p-2 font-12"},[t._v(t._s(t.user.status?"activated":"de-activated"))])])]),t._v(" "),t.user.roles.length>0?a("p",[a("strong",{staticClass:"mr-2"},[t._v("Roles :")]),t._v(" "),a("span",t._l(t.user.roles,(function(s){return a("span",{staticClass:"badge badge-light p-2 m-1 mb-0 font-12"},[t._v(t._s(s.name))])})),0)]):t._e(),t._v(" "),t.user.permissions.length>0?a("p",[a("strong",{staticClass:"mr-2"},[t._v("Permissions :")]),t._v(" "),a("span",t._l(t.user.permissions,(function(s){return a("span",{staticClass:"badge badge-light p-2 m-1 font-12"},[t._v(t._s(s.name))])})),0)]):t._e()])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=911.js.map