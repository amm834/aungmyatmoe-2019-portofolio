import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const app = new Vue({
 data: {
  loading: false
 },
 router,
 vuetify,
 render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
 app.loading = true
 next()
})

router.afterEach(() => {
 setTimeout(() => app.loading = false, 1000) // timeout for demo purposes
})