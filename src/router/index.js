import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	redirect: '/websiteManage',
	children:[
		{
			path: '/websiteManage',
			component: () => import(/* webpackChunkName: "home" */ '../views/websiteManage/index.vue'),
			meta: { title: '网站列表' }
		},
		{
			path: '/personManage',
			component: () => import(/* webpackChunkName: "home" */ '../views/personManage/index.vue'),
			meta: { title: '人员列表' }
		},
		{
			path: '/watchRecord',
			component: () => import(/* webpackChunkName: "home" */ '../views/watchRecord/index.vue'),
			meta: { title: '监测记录' }
		},
		{
			path: '/systemNotice',
			component: () => import(/* webpackChunkName: "home" */ '../views/systemNotice/index.vue'),
			meta: { title: '系统通知' }
		}
	]
  },

]

const router = new VueRouter({
  routes
})

export default router
