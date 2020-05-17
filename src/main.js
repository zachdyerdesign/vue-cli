import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Splash from './components/Splash.vue'
import Register from './components/Register.vue'
import Signin from './components/Signin.vue'
import Pricing from './components/Pricing.vue'
import Dashboard from './components/Dashboard.vue'
import Checkout from './components/Checkout.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    { path: '/', component: Splash },
    { path: '/register', component: Register },
    { path: '/signin', component: Signin },
    { path: '/pricing', component: Pricing },
    { path: '/checkout', component: Checkout },
    { path: '/dashboard', component: Dashboard }
  ]
})
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')