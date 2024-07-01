import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home, alias: "/home"},
  {
    path: '/protected',
    name: 'protected',
    components:{
      default: ()=> import('@/views/Protected.vue'),
      LeftSidebar: ()=> import('@/components/LeftSidebar.vue')
    },
    meta:{
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/Login.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    components:{
      default: ()=> import('@/views/Invoices.vue'),
      LeftSidebar: ()=> import('@/components/LeftSidebar.vue'),
    },
    meta:{
      requiresAuth: true,
    }
  },
  { path: '/search', name: 'Search', component: () => import('@/views/Search.vue') },
  { path: '/basket', name: 'Basket', component: () => import('@/views/Basket.vue') },
  { path: '/profile', name: 'Profile', component: () => import('@/views/Profile.vue') },
  {
    path: '/product/:id/:slug', 
    name: 'product.show', 
    component: () => import('@/views/ProductShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  },
  {
    path: '/experience/:id/:slug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({
      ...route.params, 
      id: parseInt(route.params.id)
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
})

router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    return {name: 'login', query:{ redirect: to.fullPath }}
  }
})

export default router;

