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

//AXIOS API
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)
app.use(VueAxios, axios)
AOS.init()
app.mount('#app')
