import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDUIBM0Wer4vxbT4ugZGLSrjIxkczDqM74",
    authDomain: "vue-9-570a3.firebaseapp.com",
    projectId: "vue-9-570a3",
    storageBucket: "vue-9-570a3.appspot.com",
    messagingSenderId: "695630088379",
    appId: "1:695630088379:web:518b695e3cd9b77a76819e",
    measurementId: "G-CYQ0PJPT76"
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')