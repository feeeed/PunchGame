import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useTelegram } from './application/services'
import './presentation/styles/index.css'
import App from './App.vue'
import Router from './application/router'


const {userInfo} = useTelegram();

userInfo()

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Router)
app.mount('#app')
