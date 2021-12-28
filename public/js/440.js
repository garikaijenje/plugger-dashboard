"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[440],{9497:(t,a,e)=>{function s(t,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}e.d(a,{Z:()=>i});const i=function(){function t(a){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=a.url,this.prefix=a.prefix,this.filters={},this.sort={field:"id",direction:"desc"},this.filters.size=10,this.filters.search="",this.loading=!1,this.page=1,this.content={current_page:1,data:[],total:0,to:0}}var a,e,i;return a=t,(e=[{key:"build",value:function(){var t="".concat(window.location.origin).concat(this.url,"?page=").concat(this.page);for(var a in this.filters)void 0!==this.filters[a]&&(t+="&".concat(a,"=").concat(this.filters[a]));return t+"&sort=".concat(this.sort.field,",").concat(this.sort.direction)}},{key:"fetch",value:function(){this.load(!1)}},{key:"append",value:function(){this.load(!0)}},{key:"load",value:function(t){var a=this;this.openLoader(),this.page=t?this.page+1:1,window.axios.get(this.build()).then((function(e){if(t)return e.data.body[a.prefix].data.forEach((function(t){a.content.data.push(t)})),a.content.to=e.data.body[a.prefix].to,void(a.content.total=e.data.body[a.prefix].total);a.content=e.data.body[a.prefix]})).catch((function(t){})).finally((function(){a.closeLoader()}))}},{key:"openLoader",value:function(){this.loading=!0}},{key:"closeLoader",value:function(){this.loading=!1}}])&&s(a.prototype,e),i&&s(a,i),t}()},6440:(t,a,e)=>{e.r(a),e.d(a,{default:()=>r});var s=e(9497);const i={name:"timeline-model",props:["url","name","model","id"],components:{},data:function(){return{report:{},loading:!1,showStatistics:!1,data:new s.Z({url:"/admin/audits",prefix:"audits",other:"statistics"}),groups:[]}},methods:{init:function(){this.data.filters.auditable_type=this.model,this.data.filters.auditable_id=this.id,this.data.fetch()}},mounted:function(){this.init()}};var n=e(1900);const l={name:"timeline",components:{TimelineModel:(0,n.Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["dimmer",t.loading?"active":""]},[e("div",{staticClass:"loader"}),t._v(" "),e("div",{staticClass:"dimmer-content"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("form",{staticClass:"card-body",on:{submit:function(a){return a.preventDefault(),t.data.fetch()}}},[e("div",{staticClass:"d-flex flex-fill"},[e("div",{staticClass:"mr-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.event,expression:"data.filters['event']"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.filters,"event",a.target.multiple?e:e[0])}}},[e("option",{domProps:{value:void 0}},[t._v("Choose Event")]),t._v(" "),e("option",{attrs:{value:"create"}},[t._v("Create")]),t._v(" "),e("option",{attrs:{value:"update"}},[t._v("Update")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mr-1"},[e("div",{staticClass:"app-search flex-fill"},[e("div",[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.startDate,expression:"data.filters['startDate']"}],staticClass:"form-control bg-white border",attrs:{type:"date"},domProps:{value:t.data.filters.startDate},on:{input:function(a){a.target.composing||t.$set(t.data.filters,"startDate",a.target.value)}}}),t._v(" "),e("span",{staticClass:"mdi mdi mdi-calendar-arrow-right"}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{class:["btn","btn-primary shadow-none"],attrs:{type:"submit",disabled:""}},[t._v("Start Date")])])])])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mr-1"},[e("div",{staticClass:"app-search flex-fill"},[e("div",[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.endDate,expression:"data.filters['endDate']"}],staticClass:"form-control bg-white border",attrs:{type:"date"},domProps:{value:t.data.filters.endDate},on:{input:function(a){a.target.composing||t.$set(t.data.filters,"endDate",a.target.value)}}}),t._v(" "),e("span",{staticClass:"mdi mdi mdi-calendar-arrow-right"}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{class:["btn","btn-primary shadow-none"],attrs:{type:"submit",disabled:""}},[t._v("End Date")])])])])])]),t._v(" "),e("div",{staticClass:"d-flex flex-fill "},[e("div",{staticClass:"flex-fill"},[e("div",{staticClass:"app-search"},[e("div",[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.search,expression:"data.filters.search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.data.filters.search},on:{input:function(a){a.target.composing||t.$set(t.data.filters,"search",a.target.value)}}}),t._v(" "),e("span",{staticClass:"mdi mdi-magnify"}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{class:["btn btn-primary",t.data.loading?"btn-loading":""],attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.data.fetch()}}},[t._v("Search")])])])])])]),t._v(" "),e("div",{staticClass:"ml-1"},[e("button",{class:["btn btn-primary px-3",t.data.loading?"btn-loading":""],on:{click:function(a){return t.data.fetch()}}},[e("i",{staticClass:"mdi mdi-autorenew"})])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center flex-wrap"},[e("div",{staticClass:"h4 m-o"},[t._v("\n                                "+t._s(t.name)+"\n                            ")]),t._v(" "),e("div",{staticClass:"ml-auto mr-3 d-flex align-items-center"},[e("div",{staticClass:"mr-2"},[t._v("Showing")]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.filters.size,expression:"data.filters.size"}],staticClass:"custom-select",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.filters,"size",a.target.multiple?e:e[0])},function(a){return t.data.fetch()}]}},[e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"15"}},[t._v("15")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")]),t._v(" "),e("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),e("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),e("option",{attrs:{value:"100"}},[t._v("100")])])])]),t._v(" "),e("div",{staticClass:"mr-3 d-flex align-items-center"},[e("div",{staticClass:"mr-2"},[t._v("Sort By")]),t._v(" "),e("div",{staticClass:"form-group mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.sort.field,expression:"data.sort.field"}],staticClass:"custom-select",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.sort,"field",a.target.multiple?e:e[0])},function(a){return t.data.fetch()}]}},[e("option",{attrs:{value:"id"}},[t._v("ID")]),t._v(" "),t._t("sort-fields")],2)])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"form-group mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.sort.direction,expression:"data.sort.direction"}],staticClass:"custom-select",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.sort,"direction",a.target.multiple?e:e[0])},function(a){return t.data.fetch()}]}},[e("option",{attrs:{value:"asc"}},[t._v("Ascending")]),t._v(" "),e("option",{attrs:{value:"desc"}},[t._v("Descending")])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-11"},[e("div",{},[e("div",{staticClass:"media d-block d-lg-flex"},[e("div",{staticClass:"media-body"},[e("div",{staticClass:"timeline-group tx-13"},[e("div",{staticClass:"timeline-label py-5"}),t._v(" "),t._l(t.data.content.data,(function(a){return e("div",{key:a.id,staticClass:"timeline-item"},[e("div",{staticClass:"timeline-time"},[e("strong",[t._v(t._s(a.created_at_read)+" "),e("br"),t._v(" "+t._s(a.last_update))])]),t._v(" "),e("div",{staticClass:"timeline-body"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"h6 mg-b-0 d-flex"},[e("div",[t._v("\n                                                        "+t._s(a.event)+" : "+t._s(a.user?a.user.name+" "+a.user.last_name:"Root System")+" - "+t._s(a.user?a.user.email:"root@steward.co.zw")+" - "),e("span",{staticClass:"text-primary"},[t._v("#"+t._s(a.user?a.user.id:"ROOT"))])])]),t._v(" "),e("h6",{staticClass:"mg-b-0"},[e("span",{staticClass:"text-primary"},[t._v("#"+t._s(a.auditable_id))]),t._v(" "+t._s(a.auditable_type))]),t._v(" "),e("p",{staticClass:"mb-3"},[e("span",{staticClass:"text-muted"},[t._v("IP : ")]),t._v(" "+t._s(a.ip_address)),e("br"),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("User Agent : ")]),t._v(" "+t._s(a.user_agent)),e("br"),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("Url : ")]),t._v(" "),e("span",{staticClass:"text-primary"},[t._v(" "+t._s(a.url)+" ")]),t._v(" "),e("br")]),t._v(" "),Object.entries(a.old_values).length>0||Object.entries(a.new_values).length>0?e("table",{staticClass:"table border-bottom border-right border-left"},[e("thead",[e("tr",[Object.entries(a.old_values).length>0?e("th",{staticClass:"w-50"},[t._v("Old")]):t._e(),t._v(" "),Object.entries(a.new_values).length>0?e("th",{staticClass:"w-50"},[t._v("New")]):t._e()])]),t._v(" "),e("tbody",[e("tr",[Object.entries(a.old_values).length>0?e("td",{},t._l(a.old_values,(function(s,i){return e("div",{key:s+"-"+i+"-"+a.id+"-old-values"},[e("span",{staticClass:"text-muted"},[t._v(t._s(i.replace("_"," "))+" : ")]),t._v(t._s(t._f("string_limit")(s,50)))])})),0):t._e(),t._v(" "),Object.entries(a.new_values).length>0?e("td",{},t._l(a.new_values,(function(s,i){return e("div",{key:s+"-"+i+"-"+a.id+"-new-values"},[e("span",{staticClass:"text-muted"},[t._v(t._s(i.replace("_"," "))+" : ")]),t._v(t._s(t._f("string_limit")(s,50)))])})),0):t._e()])])]):t._e()])])])])})),t._v(" "),e("div",{staticClass:"timeline-label pb-4 pt-4"},[t.data.content.total!==t.data.content.to&&t.data.content.data.length>0?e("button",{class:["btn btn-primary btn-sm",t.data.loading?"btn-loading":""],on:{click:function(a){return t.data.append()}}},[e("i",{staticClass:"mdi mdi-arrow-down mr-1"}),t._v(" Load More\n                                    ")]):t._e()])],2)])])])])])])])}),[],!1,null,null,null).exports}};const r=(0,n.Z)(l,(function(){var t=this,a=t.$createElement;return(t._self._c||a)("timeline-model",{attrs:{model:"App\\Transaction",id:t.$route.params.id}})}),[],!1,null,"ae91c738",null).exports}}]);
//# sourceMappingURL=440.js.map