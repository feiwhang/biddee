import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/bid",
        name: "Bid",
        component: () => import("@/views/Bid.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/myitem",
        name: "MyItem",
        component: () => import("@/views/MyItem.vue"),
        meta: {
            requiresAuth: true,
        },
    },

    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
        meta: {
            preventByAuth: true,
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
        meta: {
            preventByAuth: true,
        },
    },
    {
        path: "/register/success",
        name: "RegisterSuccess",
        component: () => import("@/views/RegisterSuccess.vue"),
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

const beforeRouteEnter = async (to, _, next) => {
    if (to.meta.requiresAuth) {
        auth.currentUser ? next() : next("/login");
    } else if (to.meta.preventByAuth) {
        auth.currentUser ? next("/") : next();
    } else {
        next();
    }
};

router.beforeEach(beforeRouteEnter);

export default router;
