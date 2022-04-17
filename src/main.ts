import { createApp } from 'vue'
import Vue from "vue"
import App from './App.vue'
import "virtual:windi.css"

//import icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
//import { faFacebook } from "@fortawesome/free-brands-svg-icons"


library.add(fas)



createApp(App).component("fa", FontAwesomeIcon).mount('#app')
