import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Store from '../components/Store.vue'
import Test from '../components/Test.vue'
import ViewProduct from '../components/ViewProduct.vue'

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
    },
    {
        path: '/Test',
        component: Test
    },
    {
        path: '/ViewProduct',
        component: ViewProduct
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router