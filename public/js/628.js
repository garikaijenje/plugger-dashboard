"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[628],{2628:(t,i,s)=>{s.r(i),s.d(i,{default:()=>n});const a={name:"user-view",data:function(){return{model:{},loading:!0}},methods:{init:function(){var t=this;this.loading=!0,window.axios.get("".concat(window.location.origin,"/admin/portal/genre/").concat(this.$route.params.id,"/view")).then((function(i){t.model=i.data.body.model})).finally((function(){t.loading=!1}))}},mounted:function(){this.init()}};const n=(0,s(1900).Z)(a,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{class:["dimmer",t.loading?"active":""]},[s("div",{staticClass:"loader"}),t._v(" "),s("div",{staticClass:"dimmer-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card ribbon-box "},[s("div",{staticClass:"card-body"},[t._m(0),t._v(" "),s("div",{staticClass:"text-left"},[s("p",[s("strong",{staticClass:"mr-2"},[t._v("Name :")]),t._v(" "),s("span",[t._v(t._s(t.model.name))])]),t._v(" "),s("p",[s("strong",{staticClass:"mr-2"},[t._v("Description :")]),t._v(" "),s("span",[t._v(t._s(t.model.description))])])])])])])])])])}),[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"d-flex align-items-center mb-3 flex-wrap"},[s("h4",{staticClass:"header-title m-0 flex-fill"},[t._v(" Information")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=628.js.map