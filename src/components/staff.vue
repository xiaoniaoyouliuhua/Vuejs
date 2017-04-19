<style>
	
</style>
<template>
<div class="animated rubberBand">
	<h1>Staff</h1>
	<table class=" table table-striped table-bordered table-hover">
		<thead>
			<tr>
				<th>编号</th>
				<th>名字</th>
				<th>性别</th>
				<th>年龄</th>
				<th>简介</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,index) in staffList">
					<td>{{index+1}}</td>
					<td>{{item.name}}</td>
					<td v-if="item.sex==1">女</td>
					<td v-else>男</td>
					<td>{{item.age}}</td>
					<td>{{item.profile}}</td>	<td><button @click="del(item.id)" class="btn btn-danger" >删除</button>
					<button @click="edit(item.id)" class="btn btn-success">编辑</button></td>	
			</tr>
		</tbody>
	</table>
</div>
	
</template>
<script>
	import axios from "axios"//每一次要ajax都要引用
	export default{
		data(){
			return {
				staffList:[]
			}
		},
		methods:{
			del(id){
				if(!confirm("你要删吗？")){
					return
				}
				axios.delete("http://localhost:9090/staff/"+id)
				.then((res)=>{
					console.log(res)
					//删除完成之后，需要重新请求数据 也可以直接把浏览器端的数据删掉 这样可以少发一次请求
					for(var i=0;i<this.staffList.length;i++){
						var item=this.staffList[i];
						if(item.id==id){
							this.staffList.splice(i,1)//从低级个索引开始删除  删除几个
						}
					}
				})
				
			},
			edit(id){
				//改变锚点值 
				//$router.push是用来改变锚点值得 和 <router-link>里的：to的属性一样 params也是一个对象 属性 必须跟 动态路由的名字一样
				this.$router.push({name:"editstaff",params:{dest:id}})
				console.log(this)
			}
		},
		created(){//实例创建完成后就可以去发送请求了
			axios.get("http://localhost:9090/staff")
			.then((res)=>{
				console.log(res)
				this.staffList=res.data
			})

		}
	}
</script>