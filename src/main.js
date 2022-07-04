import "@/scss/main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

//AOS animation
import AOS from 'aos'
import 'aos/dist/aos.css'



const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)
AOS.init()
app.mount('#app')