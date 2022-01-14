"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[490],{5490:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var a=s(41);const o={name:"reset",data:function(){return{loading:!1,otpSent:!1,error:!1,message:"",form:new a.Z({email:"",password:"",password_confirmation:"",token:""})}},methods:{getOTP:function(){var t=this;this.loading=!0,this.error=!1,this.message="",this.form.submit("/password/reset").then((function(e){!0===e.data.success?(t.otpSent=!0,t.message=e.data.message):(t.message=e.data.message,t.error=!0),t.loading=!1})).catch((function(e){t.loading=!1}))},loginUser:function(){var t=this;this.loading=!0,this.error=!1,this.message="",this.form.submit("/reset").then((function(e){!0===e.data.success?(t.message=e.data.message,setTimeout((function(){window.location="".concat(window.location.origin,"/login")}),2e3)):(t.message=e.data.message,t.error=!0)})).catch((function(e){t.loading=!1}))}}};const r=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sign"},[s("div",{staticClass:"sign__content"},[s("form",{staticClass:"sign__form",on:{submit:function(e){return e.preventDefault(),t.runForm(e)}}},[t._m(0),t._v(" "),s("p",{staticClass:"text-center text-white mb-3"},[t._v("Enter your email address to receive your reset Token")]),t._v(" "),t.message?s("p",{staticClass:"alert text-white alert-plugger small rounded-0 w-100 text-center"},[t._v("\n                "+t._s(t.message)+"\n            ")]):t._e(),t._v(" "),s("div",{staticClass:"sign__group"},[s("label",{staticClass:"text-white small"},[t._v("Email address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:["sign__input",t.form.errors.get("email")?"is-invalid":""],attrs:{type:"text",name:"email",placeholder:"Enter your email",autocomplete:"unique-1"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("email"))}})]),t._v(" "),t.otpSent?s("div",{staticClass:"sign__group"},[s("label",{staticClass:"text-white small"},[t._v("Token")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.token,expression:"form.token"}],class:["sign__input",t.form.errors.get("token")?"is-invalid":""],attrs:{type:"text",name:"email",placeholder:"Enter Token",autocomplete:"unique-1"},domProps:{value:t.form.token},on:{input:function(e){e.target.composing||t.$set(t.form,"token",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("token"))}})]):t._e(),t._v(" "),t.otpSent?s("div",{staticClass:"sign__group"},[s("label",{staticClass:"text-white small"},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],class:["sign__input",t.form.errors.get("password")?"is-invalid":""],attrs:{type:"password",placeholder:"Enter your password",autocomplete:"unique-2"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("password"))}})]):t._e(),t._v(" "),t.otpSent?s("div",{staticClass:"sign__group"},[s("label",{staticClass:"text-white small"},[t._v("Confirm Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],class:["sign__input",t.form.errors.get("password_confirmation")?"is-invalid":""],attrs:{type:"password",placeholder:"Re-Enter your password",autocomplete:"unique-2"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),s("div",{staticClass:"main__table-text--red small",domProps:{textContent:t._s(t.form.errors.get("password"))}})]):t._e(),t._v(" "),t.otpSent?t._e():s("button",{class:["sign__btn",t.form.loading||t.loading?"btn-loading":""],attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getOTP(e)}}},[t._v("Get Token")]),t._v(" "),t.otpSent?s("button",{class:["sign__btn",t.form.loading||t.loading?"btn-loading":""],attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.loginUser(e)}}},[t._v("Reset Password")]):t._e(),t._v(" "),s("div",{staticClass:"mt-2"},[s("a",{staticClass:"text-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getOTP(e)}}},[s("small",[t._v(" Get new Reset Token ?")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"sign__logo",attrs:{href:"/"}},[e("img",{attrs:{src:"/images/plugger-logo-1-white.png",alt:""}})])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=490.js.map