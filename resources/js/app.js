import Vue from "vue";
import router from "./routes/core/engine";
import { Plugin } from 'vue-fragment';
import VueMeta from 'vue-meta'
Vue.use(VueMeta);

Vue.use(Plugin);
require('./boot/axios');
require('./boot/alerts');
require('./boot/filters');
require('./boot/helpers');


let Login = () => import("./components/auth/Login");
let Reset = () => import("./components/auth/Reset");



window.vue = new Vue({
    router : router,
    components : { Login , Reset } ,
    el: '#app',
    methods : {
        logout : function ()
        {
            document.getElementById('logout-form').submit();
        }
    }
});
