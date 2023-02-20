import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectIndex from './pages/Projects/index.vue';
import ProjectShow from './pages/Projects/show.vue';
import ContactsPage from './pages/ContactsPage.vue';

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
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            component: ProjectShow
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        }
    ]
});

export {router}