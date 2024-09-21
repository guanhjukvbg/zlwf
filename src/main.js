import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

const app = createApp(App)
app.config.globalProperties.$http = axios
axios.defaults.baseURL = "http://127.0.0.1:5000"
axios.defaults.timeout = 200

app.use(router)

app.mount('#app')
