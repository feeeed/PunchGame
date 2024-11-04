import {type RouteRecordRaw} from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: () => import('@/presentation/screens/Home.vue')
    },
]






