import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import i18n from './assets/locales'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
