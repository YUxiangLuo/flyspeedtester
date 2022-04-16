import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import naive from 'naive-ui'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import './main.css'
console.log(123);

console.log(import.meta.env.VITE_ADDR);
console.log(import.meta.env);

const pinia = createPinia();

createApp(App).use(pinia).use(naive).mount('#app')