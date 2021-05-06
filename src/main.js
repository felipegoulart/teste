import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartPie, faHeadset, faLightbulb, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faChartPie)
library.add(faHeadset)
library.add(faLightbulb)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import "./assets/styles/output.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
