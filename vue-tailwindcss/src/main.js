import { createApp } from 'vue'
import App from './App.vue'
import "./style/style.css"; //在此引入
import router from './router/index.js';

createApp(App).use(router).mount('#app')
