import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard'
import FormExample from '@/components/Pages/Example/Form'
import TableExample from '@/components/Pages/Example/Table'
import ElementExample from '@/components/Pages/Example/Elements'


const routes = [
    { path: '/', redirect: { name: 'DashboardHome'} },
    { path: '/dashboard', component: Dashboard, children: [
        { path: '/', redirect: { name: 'DashboardHome' } },
        { path: 'home', name: 'DashboardHome', component: Dashboard }
      ]
    },
    { path : '/form', component: FormExample},
    { path: '/table', component: TableExample },
    { path: '/elements', component: ElementExample },
    
]

export default createRouter({
    history: createWebHistory(),
    routes
})