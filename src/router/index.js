import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '@/views/AboutMe'
import Contact from '@/views/ContactMe'
import Projects from '@/views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AboutMe
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/projects',
    component: Projects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;