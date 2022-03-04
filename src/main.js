import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

import ShakeCSS from '@/assets/css/csshake.css'
import FontAwesome from '@fortawesome/fontawesome-free/js/all.min.js'
import FontAwesomeCSS from '@fortawesome/fontawesome-free/css/all.min.css'
import ResetCSS from '@/assets/css/reset.css'

import TitleDetails from '@/components/UI/TitleDetails'
import ProjectSlider from '@/components/Project-slider/Project-slider'

import router from '@/router'
import store from '@/store'

var VueScrollTo = require('vue-scrollto')

const components = [TitleDetails, ProjectSlider]

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(VueScrollTo)
  .use(store)
  .use(router)
  .mount('#app')
