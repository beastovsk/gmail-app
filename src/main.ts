import App from './App.vue'
import { createApp } from 'vue'
import naive from 'naive-ui'
import { store } from './store'
import './assets/styles/main.css'

const app = createApp(App)

app.use(naive)
app.use(store)

app.mount('#app')
