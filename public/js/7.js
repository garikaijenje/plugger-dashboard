"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7],{4024:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(4015),s=n.n(i),a=n(3645),r=n.n(a)()(s());r.push([t.id,".container-start[data-v-967c68fa]{width:100%}.start[data-v-967c68fa]{max-width:500px;transition:all .3s ease-in-out}.open[data-v-967c68fa]{max-width:100%}","",{version:3,sources:["webpack://./resources/js/components/core/testselect.vue"],names:[],mappings:"AA2BA,kCACA,UACA,CACA,wBACA,eAAA,CACA,8BACA,CAEA,uBACA,cACA",sourcesContent:['<template>\n    <div class="">\n        <div :class="[\'start border rounded font-weight-bold\' , open ? \'open border-primary\' : \'\']">\n           <div v-if="false" class="d-flex align-items-center justify-content-between container-start p-1 px-3" @click="open = true" >\n               <div class="mr-auto">Select Permissions</div>\n               <div class="">\n                   <i class="mdi mdi-circle-edit-outline mdi-24px"/>\n               </div>\n           </div>\n\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        name: "test-select",\n        data()\n        {\n            return {\n                open : true\n            };\n        }\n    }\n<\/script>\n\n<style scoped>\n    .container-start {\n        width: 100%;\n    }\n     .start {\n        max-width: 500px;\n        transition: all .3s ease-in-out;\n     }\n\n    .open {\n        max-width: 100%;\n    }\n</style>\n'],sourceRoot:""}]);const o=r},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(s[r]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);i&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},4015:t=>{function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i,s,a=[],r=!0,o=!1;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!e||a.length!==e);r=!0);}catch(t){o=!0,s=t}finally{try{r||null==n.return||n.return()}finally{if(o)throw s}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}t.exports=function(t){var n=e(t,4),i=n[1],s=n[3];if(!s)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */"),c=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[i].concat(c).concat([o]).join("\n")}return[i].join("\n")}},3379:(t,e,n)=>{var i,s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function o(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},i=[],s=0;s<t.length;s++){var a=t[s],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=o(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:d,updater:h(m,e),references:1}),i.push(d)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var a=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function f(t,e,n){var i=n.css,s=n.media,a=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,v=0;function h(t,e){var n,i,s;if(e.singleton){var a=v++;n=p||(p=l(e)),i=m.bind(null,n,a,!1),s=m.bind(null,n,a,!0)}else n=l(e),i=f.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=o(n[i]);r[s].references--}for(var a=c(t,e),l=0;l<n.length;l++){var d=o(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=a}}}},5342:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(9497);const s={name:"data-select",props:["value","name","url","prefix","start"],mounted:function(){this.data.fetch()},data:function(){return{data:new i.Z({url:this.url,prefix:this.prefix}),selected:"",selectedName:"",dialog:!1}},watch:{value:function(t,e){""==t&&(this.selected="",this.selectedName="",this.update())},start:function(t,e){this.selectedName=t[this.select?this.select:"select_name"],this.selected=t.id}},methods:{add:function(t){this.selected=t.id,this.selectedName=t.select_name,this.close(),this.update()},close:function(){this.dialog=!1},open:function(){this.dialog=!0},remove:function(t){this.selected="",this.selectedName="",this.update()},update:function(){this.$emit("input",this.selected)}}};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-container"},[t.selected?t._e():n("div",{staticClass:"start mw-400 border"},[n("div",[t._v("\n            Click to select "+t._s(t.name)+"\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-white btn-icon border-0 mt-px-3",on:{click:function(e){return e.preventDefault(),t.open(e)}}},[n("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]),t._v(" "),t.selected?n("div",{staticClass:"result mw-400 border"},[n("div",[n("strong",[n("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(t.selected)+" - "+t._s(t.selectedName)+" ")])]),t._v(" "),n("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:t.open}},[n("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]):t._e(),t._v(" "),t.dialog?n("div",{staticClass:"select-container",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.dialog=!1}}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body py-2 border-bottom d-flex align-items-center justify-content-between"},[n("h4",{staticClass:"h4 my-0"},[t._v(t._s(t.name))]),t._v(" "),n("button",{staticClass:"btn btn-white",on:{click:t.close}},[n("i",{staticClass:"mdi mdi-close mdi-24px text-primary pointer"})])]),t._v(" "),t.selected?n("div",{staticClass:"card-body py-1 bg-white text-center border-bottom d-flex align-items-center justify-content-center"},[n("div",[n("strong",{staticClass:"badge badge-light font-13 p-1 m-1"},[n("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(t.selected)+"- "+t._s(t.selectedName)+" ")])])]):t._e(),t._v(" "),n("form",{staticClass:"d-flex align-items-center border-bottom px-3",on:{submit:function(e){return e.preventDefault(),t.data.fetch()}}},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.search,expression:"data.filters.search"}],staticClass:"form-control border-0 py-3",attrs:{type:"text"},domProps:{value:t.data.filters.search},on:{input:function(e){e.target.composing||t.$set(t.data.filters,"search",e.target.value)}}}),t._v(" "),n("button",{class:["btn btn-white",t.data.loading?"btn-loading":""],on:{click:function(e){return e.preventDefault(),t.data.fetch()}}},[n("i",{staticClass:"mdi  mdi-refresh mdi-24px text-primary pointer"})])]),t._v(" "),t.data.content.total>0?n("div",{staticClass:"select-items-select-container"},t._l(t.data.content.data,(function(e){return n("div",{key:e.id,staticClass:"border-bottom select-item"},[n("div",{staticClass:"px-3 py-2 d-flex align-items-center"},[t._t("select",null,{row:e}),t._v(" "),n("div",{staticClass:"ml-auto pointer"},[e.id!==t.selected?n("button",{staticClass:"btn btn-white btn-sm",on:{click:function(n){return t.add(e)}}},[n("i",{staticClass:"mdi mdi-checkbox-marked-circle-outline mdi-24px"})]):t._e(),t._v(" "),e.id===t.selected?n("button",{staticClass:"btn btn-icon btn-primary btn-sm shadow-none",on:{click:function(n){return t.remove(e)}}},[n("i",{staticClass:"mdi mdi-close"})]):t._e()])],2)])})),0):n("div",{staticClass:"card-body text-muted text-center"},[t._v("\n                                No records found\n                            ")]),t._v(" "),n("div",{staticClass:"card-body d-flex align-items-center"},[n("div",{staticClass:"text-muted font-13"},[t._v("\n                                    Showing "+t._s(t.data.content.data.length)+" of "+t._s(t.data.content.total)+" Records\n                                ")]),t._v(" "),t.data.content.total!==t.data.content.to&&t.data.content.data.length>0?n("div",{staticClass:"ml-auto text-primary pointer"},[n("button",{class:["btn btn-light",t.data.loading?"btn-loading":""],on:{click:function(e){return t.data.append()}}},[n("i",{class:["mdi mdi-24px mdi-arrow-down"]})])]):t._e()])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-1"},[e("i",{staticClass:"mdi  mdi-magnify mdi-24px text-muted"})])}],!1,null,null,null).exports},1143:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(9497);const s={name:"multi-data-select",props:["value","url","prefix","start","name","select"],mounted:function(){this.data.fetch()},data:function(){return{data:new i.Z({url:this.url,prefix:this.prefix}),selected:[],selectedName:[],dialog:!1}},watch:{start:function(t,e){this.selectedName=t,this.selected=t.map((function(t){return t.id}))}},methods:{add:function(t){this.selected.push(t.id);var e={};e.id=t.id,e[this.select?this.select:"select_name"]=t[this.select?this.select:"select_name"],this.selectedName.push(e),this.update()},close:function(){this.dialog=!1},open:function(){this.dialog=!0},remove:function(t){this.selected=this.selected.filter((function(e){return e!==t.id})),this.selectedName=this.selectedName.filter((function(e){return e.id!==t.id})),this.update()},update:function(){this.$emit("input",this.selected)}}};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-container"},[t.selected.length>0?t._e():n("div",{staticClass:"start mw-400 border"},[n("div",[t._v("\n            Click to select "+t._s(t.name)+"\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:function(e){return e.preventDefault(),t.open(e)}}},[n("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]),t._v(" "),t.selected.length>0?n("div",{staticClass:"result  mw-400 border"},[n("div",{staticClass:"flex-fill border-right"},t._l(this.selectedName,(function(e){return n("div",{staticClass:"py-2"},[n("strong",[n("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(e.id)+" - "+t._s(e[t.select?t.select:"select_name"])+"  ")])])})),0),t._v(" "),n("button",{staticClass:"btn btn-white btn-icon btn-sm border-0 mt-px-3",on:{click:t.open}},[n("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])]):t._e(),t._v(" "),t.dialog?n("div",{staticClass:"select-container",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.dialog=!1}}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body py-2 border-bottom d-flex align-items-center justify-content-between"},[n("h4",{staticClass:"h4 my-0"},[t._v(t._s(t.name))]),t._v(" "),n("button",{staticClass:"btn btn-white",on:{click:t.close}},[n("i",{staticClass:"mdi mdi-close mdi-24px text-primary pointer"})])]),t._v(" "),t.selected.length>0?n("div",{staticClass:"card-body py-1 bg-white text-center border-bottom d-flex align-items-center justify-content-center flex-wrap"},t._l(this.selectedName,(function(e){return n("strong",{staticClass:"badge badge-light font-13 p-1 m-1"},[n("span",{staticClass:"text-primary"},[t._v("#")]),t._v(" "+t._s(e.id)+"- "+t._s(e[t.select?t.select:"select_name"])+" ")])})),0):t._e(),t._v(" "),n("form",{staticClass:"d-flex align-items-center border-bottom px-3",on:{submit:function(e){return e.preventDefault(),t.data.fetch()}}},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.search,expression:"data.filters.search"}],staticClass:"form-control border-0 py-3",attrs:{type:"text"},domProps:{value:t.data.filters.search},on:{input:function(e){e.target.composing||t.$set(t.data.filters,"search",e.target.value)}}}),t._v(" "),n("button",{class:["btn btn-white",t.data.loading?"btn-loading":""],on:{click:function(e){return e.preventDefault(),t.data.fetch()}}},[n("i",{staticClass:"mdi  mdi-refresh mdi-24px text-primary pointer"})])]),t._v(" "),t.data.content.total>0?n("div",{staticClass:"select-items-select-container"},t._l(t.data.content.data,(function(e){return n("div",{key:e.id,staticClass:"border-bottom select-item"},[n("div",{staticClass:"px-3 py-2 d-flex align-items-center"},[t._t("select",null,{row:e}),t._v(" "),n("div",{staticClass:"ml-auto pointer"},[-1===t.selected.indexOf(e.id)?n("button",{staticClass:"btn btn-white btn-sm",on:{click:function(n){return t.add(e)}}},[n("i",{staticClass:"mdi mdi-checkbox-marked-circle-outline mdi-24px"})]):t._e(),t._v(" "),-1!==t.selected.indexOf(e.id)?n("button",{staticClass:"btn btn-icon btn-primary btn-sm shadow-none",on:{click:function(n){return t.remove(e)}}},[n("i",{staticClass:"mdi mdi-close"})]):t._e()])],2)])})),0):n("div",{staticClass:"card-body text-muted text-center"},[t._v("\n                            No records found\n                        ")]),t._v(" "),n("div",{staticClass:"card-body d-flex align-items-center"},[n("div",{staticClass:"text-muted font-13"},[t._v("\n                                Showing "+t._s(t.data.content.data.length)+" of "+t._s(t.data.content.total)+" Records\n                            ")]),t._v(" "),t.data.content.total!==t.data.content.to&&t.data.content.data.length>0?n("div",{staticClass:"ml-auto text-primary pointer"},[n("button",{class:["btn btn-light",t.data.loading?"btn-loading":""],on:{click:function(e){return t.data.append()}}},[n("i",{class:["mdi mdi-24px mdi-arrow-down"]})])]):t._e()])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"pr-1"},[e("i",{staticClass:"mdi  mdi-magnify mdi-24px text-muted"})])}],!1,null,null,null).exports},427:(t,e,n)=>{n.d(e,{Z:()=>c});const i={name:"test-select",data:function(){return{open:!0}}};var s=n(3379),a=n.n(s),r=n(4024),o={insert:"head",singleton:!1};a()(r.Z,o);r.Z.locals;const c=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{class:["start border rounded font-weight-bold",t.open?"open border-primary":""]},[t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("i",{staticClass:"mdi mdi-circle-edit-outline mdi-24px"})])}],!1,null,"967c68fa",null).exports},1007:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});const i={components:{RoleForm:n(9173).Z}};const s=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("role-form",{attrs:{id:t.$route.params.id,edit:!0}})}),[],!1,null,null,null).exports},9173:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(41),s=n(5342),a=n(1143),r=n(427);const o={name:"roles-select",props:["data"]};var c=n(1900);const l={name:"role-form",components:{RolesSelect:(0,c.Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"mr-3 text-primary"},[n("strong",[t._v("#"+t._s(t.data.row.id))])]),t._v(" "),n("div",{staticClass:"my-0 ml-2"},[n("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.data.row.select_name))]),t._v(" "),n("div",{staticClass:"text-muted font-12"},[t._v("Created : "+t._s(t.data.row.created_at))])])])}),[],!1,null,null,null).exports,TestSelect:r.Z,MultiDataSelect:a.Z,DataSelect:s.Z},props:["edit","id"],data:function(){return{form:new i.Z({name:"",description:""},{})}},mounted:function(){this.edit&&this.init()},methods:{init:function(){var t=this;this.form.loading=!0,window.axios.get("/admin/portal/province/".concat(this.id,"/view")).then((function(e){t.form.extract(e.data.body.model),t.form.loading=!1}))},create:function(){var t=this;this.form.submit(this.edit?"/admin/portal/province/".concat(this.id,"/update"):"/admin/portal/province/create").then((function(e){window.alerts.success(e).then((function(e){t.edit||t.$router.push("/admin/province/".concat(e.data.body.model.id,"/view"))}))})).catch((function(t){})).finally((function(){}))}}};const d=(0,c.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{class:["dimmer",t.form.loading?"active":""]},[n("div",{staticClass:"loader"}),t._v(" "),n("div",{staticClass:"dimmer-content"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"mb-3"},[t._v(" "+t._s(this.edit?"Edit":"Create")+"  Province")]),t._v(" "),n("div",{staticClass:"form-horizontal"},[n("div",{staticClass:"form-group row mb-3 align-items-center"},[n("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"col-lg-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:["form-control mw-400",t.form.errors.get("name")?"is-invalid":""],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("name"))}})])]),t._v(" "),n("div",{staticClass:"form-group row mb-3 align-items-center"},[n("label",{staticClass:"col-lg-3 col-form-label"},[t._v("Description")]),t._v(" "),n("div",{staticClass:"col-lg-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],class:["form-control mw-400",t.form.errors.get("description")?"is-invalid":""],attrs:{type:"text",name:"description",placeholder:"Description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),n("div",{staticClass:"invalid-feedback",domProps:{textContent:t._s(t.form.errors.get("description"))}})])])]),t._v(" "),n("div",{staticClass:"form-group mb-0 justify-content-end row"},[n("div",{staticClass:"col-lg-9"},[n("button",{class:["btn btn-primary",t.form.loading?"btn-loading":""],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v(t._s(this.edit?"Edit":"Create")+" Province")])])])])])])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=7.js.map