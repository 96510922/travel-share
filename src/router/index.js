import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import SignOut from "../views/SignOut.vue"
import firebase from "firebase"
import Posts from "../views/Posts.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signOut",
    name: "signOut",
    component: SignOut
  },
  {
    path: "/post",
    name: "Post",
    component: Posts
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//ナビゲーションガード
router.beforeEach((to,from,next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        next();
      }else {
        next("/login")
      }
    });
  } else {
      next();
  }
}) 


export default router
