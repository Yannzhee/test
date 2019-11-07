import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import "./assets/basic.css"
import 'swiper/css/swiper.css'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render: h => h(App),
})
