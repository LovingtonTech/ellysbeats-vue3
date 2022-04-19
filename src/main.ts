import { createApp } from 'vue'
import App from './App.vue'
import "virtual:windi.css"
import router from './router'

//Vuetify
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
components,
directives
})

//import icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"


library.add(fas, fab)



createApp(App).component("fa", FontAwesomeIcon).use(router,vuetify).mount('#app')
