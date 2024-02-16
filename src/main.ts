import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const RemoteButton = defineAsyncComponent(() => import('remote_app_01/RemoteButton'))

app.component('RemoteButton', RemoteButton)

app.use(createPinia())
app.use(router)

app.mount('#app')
