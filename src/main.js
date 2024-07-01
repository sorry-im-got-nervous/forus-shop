import { createApp } from 'vue'
//import './style.css'
import AppLink from '@/components/AppLink.vue'
import App from './App.vue'
import router from '@/router'

createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount('#app')
