import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/Blog/:id',
    name:'Blog',
    component:Blog
  },
  {
    path:'/Edit/:id',
    name: 'Edit',
    component: Edit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
