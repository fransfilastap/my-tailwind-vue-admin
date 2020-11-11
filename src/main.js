import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'

import Dashboard from '@/components/Dashboard'

import store from './store/index'

import './assets/styles/index.css'

const routes = [
    { path: '/', redirect: { name: 'DashboardHome'} },
    { path: '/dashboard', component: Dashboard, children: [
        { path: '/', redirect: { name: 'DashboardHome' } },
        { path: 'home', name: 'DashboardHome', component: Dashboard }
      ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
  
