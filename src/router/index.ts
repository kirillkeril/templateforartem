import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

export enum RouterNames {
    NOT_FOUND = 'notFound'
}

const routes: Array<RouteRecordRaw> = [
    {
        path:"/",
        name: "home",

    },
    {
        path: '/:pathMatch(.*)*',
        name: RouterNames.NOT_FOUND,
        redirect: {
            name: 'home'
        }
    }
];
export const router = createRouter({
    history: createWebHistory(),
    routes
});
