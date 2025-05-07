import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    // 路由表，描述了路径和组件的对应关系
    routes: [
        {
            path: "/login",
            component:()=>import("@/views/login/index.vue")
        },
        {
            path: "/",
            component:Layout,
            redirect:"/dashboard",
            children:[
                {
                    path: "dashboard",
                    component:()=>import("@/views/dashboard/index.vue"),
                }
            ]
                

        },
        {
            path:"/404",
            component:()=>import("@/views/404View.vue")
        },
        {
            path:"*",
            redirect:"/404"
        }
    ]
});

export default router;
