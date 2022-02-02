"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82],{5342:(t,e,s)=>{s.d(e,{Z:()=>n});var a=s(9497);const i={name:"data-select",props:["value","name","url","prefix","start"],mounted:function(){this.data.fetch()},data:function(){return{data:new a.Z({url:this.url,prefix:this.prefix}),selected:"",selectedName:"",dialog:!1}},watch:{value:function(t,e){""==t&&(this.selected="",this.selectedName="",this.update())},start:function(t,e){this.selectedName=t[this.select?this.select:"select_name"],this.selected=t.id}},methods:{add:function(t){this.selected=t.id,this.selectedName=t.select_name,this.close(),this.update()},close:function(){this.dialog=!1},open:function(){this.dialog=!0},remove:function(t){this.selected="",this.selectedName="",this.update()},update:function(){this.$emit("input",this.selected)}}};const n=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-container"},[t.selected?t._e():s("div",{staticClass:"start mw-400 border"},[s("div",[t._v("\n            Click to select "+t._s(t.name)+"\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-white btn-icon border-0 mt-px-3",on:{click:function(e){return e.preventDefault(),t.open.apply(null,arguments)}}},[s("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]),t._v(" "),t.selected?s("div",{staticClass:"result mw-400 border"},[s("div",[s("strong",[s("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(t.selected)+" - "+t._s(t.selectedName)+" ")])]),t._v(" "),s("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:t.open}},[s("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]):t._e(),t._v(" "),t.dialog?s("div",{staticClass:"select-container",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.dialog=!1}}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body py-2 border-bottom d-flex align-items-center justify-content-between"},[s("h4",{staticClass:"h4 my-0"},[t._v(t._s(t.name))]),t._v(" "),s("button",{staticClass:"btn btn-white",on:{click:t.close}},[s("i",{staticClass:"mdi mdi-close mdi-24px text-primary pointer"})])]),t._v(" "),t.selected?s("div",{staticClass:"card-body py-1 bg-white text-center border-bottom d-flex align-items-center justify-content-center"},[s("div",[s("strong",{staticClass:"badge badge-light font-13 p-1 m-1"},[s("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(t.selected)+"- "+t._s(t.selectedName)+" ")])])]):t._e(),t._v(" "),s("form",{staticClass:"d-flex align-items-center border-bottom px-3",on:{submit:function(e){return e.preventDefault(),t.data.fetch()}}},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.search,expression:"data.filters.search"}],staticClass:"form-control border-0 py-3",attrs:{type:"text"},domProps:{value:t.data.filters.search},on:{input:function(e){e.target.composing||t.$set(t.data.filters,"search",e.target.value)}}}),t._v(" "),s("button",{class:["btn btn-white",t.data.loading?"btn-loading":""],on:{click:function(e){return e.preventDefault(),t.data.fetch()}}},[s("i",{staticClass:"mdi  mdi-refresh mdi-24px text-primary pointer"})])]),t._v(" "),t.data.content.total>0?s("div",{staticClass:"select-items-select-container"},t._l(t.data.content.data,(function(e){return s("div",{key:e.id,staticClass:"border-bottom select-item"},[s("div",{staticClass:"px-3 py-2 d-flex align-items-center"},[t._t("select",null,{row:e}),t._v(" "),s("div",{staticClass:"ml-auto pointer"},[e.id!==t.selected?s("button",{staticClass:"btn btn-white btn-sm",on:{click:function(s){return t.add(e)}}},[s("i",{staticClass:"mdi mdi-checkbox-marked-circle-outline mdi-24px"})]):t._e(),t._v(" "),e.id===t.selected?s("button",{staticClass:"btn btn-icon btn-primary btn-sm shadow-none",on:{click:function(s){return t.remove(e)}}},[s("i",{staticClass:"mdi mdi-close"})]):t._e()])],2)])})),0):s("div",{staticClass:"card-body text-muted text-center"},[t._v("\n                                No records found\n                            ")]),t._v(" "),s("div",{staticClass:"card-body d-flex align-items-center"},[s("div",{staticClass:"text-muted font-13"},[t._v("\n                                    Showing "+t._s(t.data.content.data.length)+" of "+t._s(t.data.content.total)+" Records\n                                ")]),t._v(" "),t.data.content.total!==t.data.content.to&&t.data.content.data.length>0?s("div",{staticClass:"ml-auto text-primary pointer"},[s("button",{class:["btn btn-light",t.data.loading?"btn-loading":""],on:{click:function(e){return t.data.append()}}},[s("i",{class:["mdi mdi-24px mdi-arrow-down"]})])]):t._e()])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-1"},[e("i",{staticClass:"mdi  mdi-magnify mdi-24px text-muted"})])}],!1,null,null,null).exports},1143:(t,e,s)=>{s.d(e,{Z:()=>n});var a=s(9497);const i={name:"multi-data-select",props:["value","url","prefix","start","name","select"],mounted:function(){this.data.fetch()},data:function(){return{data:new a.Z({url:this.url,prefix:this.prefix}),selected:[],selectedName:[],dialog:!1}},watch:{start:function(t,e){this.selectedName=t,this.selected=t.map((function(t){return t.id}))}},methods:{add:function(t){this.selected.push(t.id);var e={};e.id=t.id,e[this.select?this.select:"select_name"]=t[this.select?this.select:"select_name"],this.selectedName.push(e),this.update()},close:function(){this.dialog=!1},open:function(){this.dialog=!0},remove:function(t){this.selected=this.selected.filter((function(e){return e!==t.id})),this.selectedName=this.selectedName.filter((function(e){return e.id!==t.id})),this.update()},update:function(){this.$emit("input",this.selected)}}};const n=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-container"},[t.selected.length>0?t._e():s("div",{staticClass:"start mw-400 border"},[s("div",[t._v("\n            Click to select "+t._s(t.name)+"\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:function(e){return e.preventDefault(),t.open.apply(null,arguments)}}},[s("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]),t._v(" "),t.selected.length>0?s("div",{staticClass:"result  mw-400 border"},[s("div",{staticClass:"flex-fill border-right"},t._l(this.selectedName,(function(e){return s("div",{staticClass:"py-2"},[s("strong",[s("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(e.id)+" - "+t._s(e[t.select?t.select:"select_name"])+"  ")])])})),0),t._v(" "),s("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:t.open}},[s("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]):t._e(),t._v(" "),t.dialog?s("div",{staticClass:"select-container",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.dialog=!1}}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body py-2 border-bottom d-flex align-items-center justify-content-between"},[s("h4",{staticClass:"h4 my-0"},[t._v(t._s(t.name))]),t._v(" "),s("button",{staticClass:"btn btn-white",on:{click:t.close}},[s("i",{staticClass:"mdi mdi-close mdi-24px text-primary pointer"})])]),t._v(" "),t.selected.length>0?s("div",{staticClass:"card-body py-1 bg-white text-center border-bottom d-flex align-items-center justify-content-center flex-wrap"},t._l(this.selectedName,(function(e){return s("strong",{staticClass:"badge badge-light font-13 p-1 m-1"},[s("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(e.id)+"- "+t._s(e[t.select?t.select:"select_name"])+" ")])})),0):t._e(),t._v(" "),s("form",{staticClass:"d-flex align-items-center border-bottom px-3",on:{submit:function(e){return e.preventDefault(),t.data.fetch()}}},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.search,expression:"data.filters.search"}],staticClass:"form-control border-0 py-3",attrs:{type:"text"},domProps:{value:t.data.filters.search},on:{input:function(e){e.target.composing||t.$set(t.data.filters,"search",e.target.value)}}}),t._v(" "),s("button",{class:["btn btn-white",t.data.loading?"btn-loading":""],on:{click:function(e){return e.preventDefault(),t.data.fetch()}}},[s("i",{staticClass:"mdi  mdi-refresh mdi-24px text-primary pointer"})])]),t._v(" "),t.data.content.total>0?s("div",{staticClass:"select-items-select-container"},t._l(t.data.content.data,(function(e){return s("div",{key:e.id,staticClass:"border-bottom select-item"},[s("div",{staticClass:"px-3 py-2 d-flex align-items-center"},[t._t("select",null,{row:e}),t._v(" "),s("div",{staticClass:"ml-auto pointer"},[-1===t.selected.indexOf(e.id)?s("button",{staticClass:"btn btn-white btn-sm",on:{click:function(s){return t.add(e)}}},[s("i",{staticClass:"mdi mdi-checkbox-marked-circle-outline mdi-24px"})]):t._e(),t._v(" "),-1!==t.selected.indexOf(e.id)?s("button",{staticClass:"btn btn-icon btn-primary btn-sm shadow-none",on:{click:function(s){return t.remove(e)}}},[s("i",{staticClass:"mdi mdi-close"})]):t._e()])],2)])})),0):s("div",{staticClass:"card-body text-muted text-center"},[t._v("\n                            No records found\n                        ")]),t._v(" "),s("div",{staticClass:"card-body d-flex align-items-center"},[s("div",{staticClass:"text-muted font-13"},[t._v("\n                                Showing "+t._s(t.data.content.data.length)+" of "+t._s(t.data.content.total)+" Records\n                            ")]),t._v(" "),t.data.content.total!==t.data.content.to&&t.data.content.data.length>0?s("div",{staticClass:"ml-auto text-primary pointer"},[s("button",{class:["btn btn-light",t.data.loading?"btn-loading":""],on:{click:function(e){return t.data.append()}}},[s("i",{class:["mdi mdi-24px mdi-arrow-down"]})])]):t._e()])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-1"},[e("i",{staticClass:"mdi  mdi-magnify mdi-24px text-muted"})])}],!1,null,null,null).exports},1068:(t,e,s)=>{s.d(e,{Z:()=>i});const a={name:"roles-select",props:["data"]};const i=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-3 text-primary"},[s("strong",[t._v("#"+t._s(t.data.row.id))])]),t._v(" "),s("div",{staticClass:"my-0 ml-2"},[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.data.row.select_name))]),t._v(" "),s("div",{staticClass:"text-muted font-12"},[t._v("Created : "+t._s(t.data.row.created_at))])])])}),[],!1,null,null,null).exports},1082:(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const a={components:{UserForm:s(7923).Z}};const i=(0,s(1900).Z)(a,(function(){var t=this.$createElement;return(this._self._c||t)("user-form",{attrs:{edit:!1}})}),[],!1,null,null,null).exports},7923:(t,e,s)=>{s.d(e,{Z:()=>l});var a=s(41),i=s(5342),n=s(1143);const o={name:"user-form",components:{RolesSelect:s(1068).Z,MultiDataSelect:n.Z,DataSelect:i.Z},props:["edit","id"],data:function(){return{form:new a.Z({name:"",last_name:"",email:"",phone:"",password:"",type:"",roles:[],permissions:[]},{roles:[],permissions:[]})}},mounted:function(){this.edit&&this.init()},methods:{init:function(){var t=this;this.form.loading=!0,window.axios.get("/admin/portal/users/".concat(this.id,"/view")).then((function(e){t.form.extract(e.data.body.model),t.form.store("roles",e.data.body.model),t.form.store("permissions",e.data.body.model),t.form.loading=!1}))},create:function(){var t=this;this.form.submit(this.edit?"/admin/portal/users/".concat(this.id,"/update"):"/admin/portal/users/create").then((function(e){window.alerts.success(e).then((function(e){t.edit||t.$router.push("/admin/users/".concat(e.data.body.model.id,"/view"))}))})).catch((function(t){})).finally((function(){}))}}};const l=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{class:["dimmer",t.form.loading?"active":""]},[s("div",{staticClass:"loader"}),t._v(" "),s("div",{staticClass:"dimmer-content"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"mb-3"},[t._v(" "+t._s(this.edit?"Edit":"Create")+"  User")]),t._v(" "),s("div",{staticClass:"form-horizontal"},[s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("First Name")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:["form-control mw-400",t.form.errors.get("name")?"is-invalid":""],attrs:{type:"text",name:"name",placeholder:"First Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("name"))}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Last Name")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],class:["form-control mw-400",t.form.errors.get("last_name")?"is-invalid":""],attrs:{type:"text",name:"last_name",placeholder:"Last Name"},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("last_name"))}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:["form-control mw-400",t.form.errors.get("email")?"is-invalid":""],attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("email"))}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],class:["form-control mw-400",t.form.errors.get("phone")?"is-invalid":""],attrs:{type:"text",name:"phone",placeholder:"Phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("phone"))}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Type")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],class:["form-control mw-400",t.form.errors.get("type")?"is-invalid":""],attrs:{type:"text",name:"type"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Choose Type")]),t._v(" "),s("option",{attrs:{value:"artist"}},[t._v("artist")]),t._v(" "),s("option",{attrs:{value:"zimura"}},[t._v("zimura")]),t._v(" "),s("option",{attrs:{value:"radio"}},[t._v("radio")]),t._v(" "),s("option",{attrs:{value:"tv"}},[t._v("tv")]),t._v(" "),s("option",{attrs:{value:"admin"}},[t._v("admin")]),t._v(" "),s("option",{attrs:{value:"individual"}},[t._v("individual")])]),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("type"))}})])]),t._v(" "),t.edit?t._e():s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Password")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],class:["form-control mw-400",t.form.errors.get("password")?"is-invalid":""],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("password"))}})])]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Roles")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("multi-data-select",{attrs:{start:t.form.storage.roles,select:"name",name:"Roles",url:"/admin/portal/roles",prefix:"roles"},scopedSlots:t._u([{key:"select",fn:function(t){return[s("roles-select",{attrs:{data:t}})]}}]),model:{value:t.form.roles,callback:function(e){t.$set(t.form,"roles",e)},expression:"form.roles"}}),t._v(" "),s("div",{staticClass:"text-danger font-12",domProps:{textContent:t._s(t.form.errors.get("roles"))}})],1)]),t._v(" "),s("div",{staticClass:"form-group row mb-3 align-items-center"},[s("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Permissions")]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("multi-data-select",{attrs:{select:"name",start:t.form.storage.permissions,name:"Permissions",url:"/admin/portal/permissions",prefix:"permissions"},scopedSlots:t._u([{key:"select",fn:function(t){return[s("roles-select",{attrs:{data:t}})]}}]),model:{value:t.form.permissions,callback:function(e){t.$set(t.form,"permissions",e)},expression:"form.permissions"}}),t._v(" "),s("div",{staticClass:"text-danger font-12",domProps:{textContent:t._s(t.form.errors.get("permissions"))}})],1)]),t._v(" "),s("div",{staticClass:"form-group mb-0 justify-content-end row"},[s("div",{staticClass:"col-lg-9"},[s("button",{class:["btn btn-primary",t.form.loading?"btn-loading":""],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.create.apply(null,arguments)}}},[t._v(t._s(this.edit?"Edit":"Create")+" User")])])])])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=82.js.map