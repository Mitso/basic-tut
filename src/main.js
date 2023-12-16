import './assets/css/main.css'

import { utils } from '@/_utils'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// wait for facebook sdk to start app
utils.initFB().then(() => {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    
    app.mount('#app')
    
})

console.log('Loaded web page main script.')