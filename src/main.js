import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faCoffee, faHeart, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

library.add(
  faCircle,
  faCoffee,
  faHeart,
  faPlus,
  faUser,
  faCopyright,
  faEnvelope,
  faFacebookF,
  faGithub,
  faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
