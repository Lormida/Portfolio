import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catastrophe from '@/views/Catastrophe.vue'
const Details = () => import('@/views/Details.vue')
const Start = () => import('@/views/Start.vue')
const MagicSphere = () => import('@/views/MagicSphere.vue')

const routes = [
  {
    path: '/details/:id',
    name: Details,
    component: Details,
    props: true
  },
  {
    path: '/',
    name: Home,
    component: Home,
    props: true,
  },
  {
    path: '/catastrophe',
    name: Catastrophe,
    component: Catastrophe,
    props: true
  },
  {
    path: '/magic-sphere',
    name: MagicSphere,
    component: MagicSphere,
    props: true,
  },
  {
    path: '/start',
    name: Start,
    component: Start,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (from.path == '/' && to.path.startsWith('/details')) {
      return {
        top: 0,
      }
    }
    else if (to.path == '/' && from.path.startsWith('/details')) {
      return {
        top: 0,
        el: '#section3'
      }
    }
  },
})

export default router