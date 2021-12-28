import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);


let routes = [];

import welcome from "../welcome";
routes = routes.concat(welcome);

import admin from "../admin";
routes = routes.concat(admin);

const router = new VueRouter({
    routes :  routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth)
    {
        if (window.user.email)
        {
            next();
            return;
        }
        window.location = "/admin/login";
        return;
    }
    next();
});

export default router;
