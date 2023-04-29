import App from './App.vue'
import { createApp } from 'vue'
import naive from 'naive-ui'
import './assets/styles/main.css'

const app = createApp(App)

app.use(naive)

app.mount('#app')
