/*
* @Author: 1
* @Date:   2017-04-20 20:54:18
* @Last Modified by:   1
* @Last Modified time: 2017-04-21 10:15:51
*/

'use strict';
import Vue from 'vue'
import VueRouter from "vue-router"
import App from "./App.vue"
import Home from "./components/home.vue"
import Cart from "./components/cart.vue"
import Search from "./components/search.vue"
import VVIP from "./components/vvip.vue"
import News from "./components/news.vue"
import Detail from "./components/Detail.vue"
import Pic from './components/Pic.vue'

//引入UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//使用路由
Vue.use(VueRouter)
Vue.use(MintUI)

//配置路由
const router=new VueRouter({
	routes:[
		{name:"app",path:"/",redirect:"/home"},
		{name:"home",path:"/home",component:Home},
		{name:"cart",path:"/cart",component:Cart},
		{name:'ppic',path:"/pic/:youid",component:Pic},
		{name:"vvip",path:"/vvip",component:VVIP},
		{name:"news",path:"/news",component:News},
		{name:"detail",path:"/detail/:myid",component:Detail}
		

	]
})

//new vue 
new Vue({
	el:"#box",
	router,
	render:h=>h(App)
})