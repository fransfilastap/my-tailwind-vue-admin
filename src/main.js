import { createApp } from 'vue'
import App from './App.vue'

import store from './store'
import router from './routes'

import './assets/styles/index.css'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
  
