/*
* @Author: 1
* @Date:   2017-04-17 00:15:49
* @Last Modified by:   1
* @Last Modified time: 2017-04-17 00:35:55
*/

'use strict';
const Left={
	template:`
	<div style="background:#f74747;position:fixed;left:0;top:0;bottom:0;width:150px;">
	<ul>
	<li>
	<router-link :to="{name:'home'}">home页</router-link>
	<router-link :to="{name:'tec'}">僵尸管理页</router-link>
	</li>
	</ul>
	</div>
	`
}