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
import 'bootstrap-icons/font/bootstrap-icons.css'

//AOS animation
import VueAos from 'vue-aos'
import AOS from 'aos'
import 'aos/dist/aos.css'


//AXIOS API

import axios from 'axios'
import VueAxios from 'vue-axios'

import $ from "jquery";

const app = createApp(App)

app.use(BootstrapVue3)



app.use(router)
app.use(VueAxios, axios)

app.use(VueAos)
AOS.init({
    duration: 1200,
    once: true
})

 //refresh animations
 $(window).on('load', function() {
    AOS.refresh();
 });

app.provide("$", $) //use for all page


app.mount('#app')

