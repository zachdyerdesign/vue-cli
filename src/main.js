import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Splash from './components/Splash.vue'
import Register from './components/Register.vue'
import Signin from './components/Signin.vue'
import Pricing from './components/Pricing.vue'
import Dashboard from './components/Dashboard.vue'
import Checkout from './components/Checkout.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firestorePlugin)
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyDmxufFleKDxXdx5up-bkFd3W4628I6eZs",
  authDomain: "vue-cli-b87c4.firebaseapp.com",
  databaseURL: "https://vue-cli-b87c4.firebaseio.com",
  projectId: "vue-cli-b87c4",
  storageBucket: "vue-cli-b87c4.appspot.com",
  messagingSenderId: "631863876337",
  appId: "1:631863876337:web:74305f1958763aa4e9e750",
  measurementId: "G-W0CECLJ73P"
}
firebase.initializeApp(firebaseConfig)
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