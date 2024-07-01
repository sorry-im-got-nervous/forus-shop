import { createApp } from 'vue';
//import './style.css'
import AppLink from '@/components/AppLink.vue';
import App from './App.vue';
import router from '@/router';
import store from './store'; // Импортируйте хранилище Vuex

createApp(App)
  .component('AppLink', AppLink)
  .use(router)
  .use(store) // Подключите хранилище Vuex к приложению Vue
  .mount('#app');
