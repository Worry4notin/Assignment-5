import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Store from '../components/Store.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Store',
        component: Store
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router