import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// import About from '@/pages/About.vue'
// import store from '@/store'

Vue.use(VueRouter)

// const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  //   beforeEnter: (to, from, next) => {
  //     if (!store.getters['auth/autenticado']) {
  //       return next({
  //         name: 'Login'
  //       })
  //     }

  //     next()
  //   }
  // }
// ]

Vue.router = new VueRouter({
  mode: 'history',
  routes
})

export default Vue.router
