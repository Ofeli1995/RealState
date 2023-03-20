import { createRouter, createWebHistory } from 'vue-router'
import rrsHome from '../views/rrs-Home.vue'
import rrsAbout from '../views/rrs-About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: rrsHome
  },
  {
    path: '/about',
    name: 'about',

    component: rrsAbout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
