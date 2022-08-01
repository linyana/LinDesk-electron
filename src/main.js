import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = '/api'

createApp(App).mount('#app')
