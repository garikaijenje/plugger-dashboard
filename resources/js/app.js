import Vue from "vue";
import router from "./routes/core/engine";
import { Plugin } from 'vue-fragment';
import VueMeta from 'vue-meta'
import Vuex from 'vuex'
Vue.use(VueMeta);
Vue.use(Vuex);
Vue.use(Plugin);


require('./boot/axios');
require('./boot/alerts');
require('./boot/filters');
require('./boot/helpers');


let Login = () => import("./components/auth/Login");
let Reset = () => import("./components/auth/Reset");
let Register = () => import("./components/auth/Register");



window.vue = new Vue({
    router : router,
    components : { Login , Reset , Register } ,
    el: '#app',
    methods : {
        logout : function ()
        {
            document.getElementById('logout-form').submit();
        }
    }
});
