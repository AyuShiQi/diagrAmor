import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import amor from '../packages/index'

createApp(App)
.use(amor)
.mount('#app')