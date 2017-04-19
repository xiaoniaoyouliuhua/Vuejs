/*
* @Author: 1
* @Date:   2017-04-19 19:39:00
* @Last Modified by:   1
* @Last Modified time: 2017-04-19 23:02:34
*/

'use strict';
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import Staff from "./components/staff.vue"
import Leader from "./components/leader.vue"
import EditStaff from "./components/EditStaff.vue"

import "bootstrap/dist/css/bootstrap.css"
import "animate.css/animate.css"

//使用路由
Vue.use(VueRouter)
//配置路由
const router=new VueRouter({
	routes:[
	{name:'app',path:"/",redirect:"/staff"},
	{name:'staff',path:"/staff",component:Staff},
	{name:'leader',path:"/leader",component:Leader},
	{name:"editstaff",path:"/editstaff/:dest",component:EditStaff}
	]
})

//创建vue
new Vue({
	el:"#app",
	router,
	render:h=>h(App)//渲染
})