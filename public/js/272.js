"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[272],{272:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var a=s(41);const o={name:"login",data:function(){return{loading:!1,error:!1,otp:!1,message:"",form:new a.Z({name:"",last_name:"",email:"",phone:"",password:"",password_confirmation:""})}},methods:{runForm:function(){this.register()},register:function(){var t=this;this.loading=!0,this.error=!1,this.message="",this.form.submit("/register").then((function(e){!0===e.data.success?(t.message=e.data.message,setTimeout((function(){window.location="".concat(window.location.origin,"/")}),2e3)):(t.message=e.data.message,t.loading=!1,t.error=!0)})).catch((function(e){t.loading=!1}))}}};const r=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign"},[s("div",{staticClass:"sign__content row align-content-center"},[s("form",{staticClass:"col-lg-7",on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[t._m(0),t._v(" "),t.message?s("p",{staticClass:"alert text-white alert-plugger small rounded-0 w-100 text-center"},[t._v("\n                 "+t._s(t.message)+"\n            ")]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:["sign__input",t.form.errors.get("name")?"is-invalid":""],attrs:{type:"text",placeholder:"Enter your name",autocomplete:"unique-1"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("name"))}})]),t._v(" "),s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Last Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],class:["sign__input",t.form.errors.get("last_name")?"is-invalid":""],attrs:{type:"text",placeholder:"Enter your last name",autocomplete:"unique-1"},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("last_name"))}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Email address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:["sign__input",t.form.errors.get("email")?"is-invalid":""],attrs:{type:"text",placeholder:"Enter your email",autocomplete:"unique-1"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("email"))}})]),t._v(" "),s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Phone")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],class:["sign__input",t.form.errors.get("phone")?"is-invalid":""],attrs:{type:"number",placeholder:"Enter your phone",autocomplete:"unique-1"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("phone"))}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],class:["sign__input",t.form.errors.get("password")?"is-invalid":""],attrs:{type:"password",placeholder:"Enter your password",autocomplete:"unique-2"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("password"))}})]),t._v(" "),s("div",{staticClass:"sign__group col-lg-6"},[s("label",{staticClass:"text-white small"},[t._v("Confirm Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],class:["sign__input",t.form.errors.get("password_confirmation")?"is-invalid":""],attrs:{type:"password",placeholder:"Re-Enter your password",autocomplete:"unique-2"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("password"))}})])]),t._v(" "),s("div",{staticClass:"text-center"},[s("button",{class:["sign__btn",t.form.loading||t.loading?"btn-loading":""],attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[t._v("Register")]),t._v(" "),s("span",{staticClass:"sign__delimiter"},[t._v("or")]),t._v(" "),t._m(1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"sign__logo text-center",attrs:{href:"/"}},[e("img",{attrs:{src:"/images/plugger-logo-1-white.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"sign__text"},[t._v("Already have an account ? "),s("a",{attrs:{href:"/login"}},[t._v("Log In")])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=272.js.map