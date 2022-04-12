import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'

console.log(import.meta.env.VITE_ADDR);
console.log(import.meta.env);
createApp(App).use(createPinia()).use(ElementPlus).mount('#app')