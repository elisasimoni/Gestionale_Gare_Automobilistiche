import Vue from 'vue'
import App from './db-auto.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes'
import { BootstrapVue, IconsPlugin, ModalPlugin, DropdownPlugin, TablePlugin  } from 'bootstrap-vue'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
// As a global method

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(ModalPlugin)

Vue.use(VueAxios,axios)

Vue.config.productionTip = false
Vue.prototype.$serverPath = "https://localhost:8080/"

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
