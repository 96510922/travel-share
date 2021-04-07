import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import BootstrapVue from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css' 
Vue.use(BootstrapVue)

Vue.config.productionTip = false


//  Firebaseを初期化
const firebaseConfig = {
  apiKey: "AIzaSyD95668W5EXziUS4O9RSeDNhQIaw-u3ECM",
  authDomain: "travel--share.firebaseapp.com",
  databaseURL: "https://travel--share-default-rtdb.firebaseio.com",
  projectId: "travel--share",
  storageBucket: "travel--share.appspot.com",
  messagingSenderId: "760864967577",
  appId: "1:760864967577:web:f806f59b3c54f3bf836108"
};
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
