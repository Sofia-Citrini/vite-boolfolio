import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectIndex from './pages/Projects/index.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectIndex
        }
    ]
});

export {router}