<style>
	
</style>
<template>
	<div>
		<p>{{item.id}}</p>
		<input type="text" v-model="item.name"><br>
		<input type="text" v-model="item.age"><br>
		男: <input type="radio" value="0" v-model="item.sex"><br>
		女: <input type="radio" value="1" v-model="item.sex"><br>
		<textarea name="" id="" cols="30" rows="10" v-model="item.profile"></textarea>
		<button class="btn btn-success" @click="save()">保存</button>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		data(){
			return {
				item:{

			}
			}
		},
		created(){
			axios.get("http://localhost:9090/staff/"+this.$route.params.dest)
			.then((res)=>{
				//成功之后
				// console.log(this)
				console.log(res)
				this.item=res.data
			})
		},
		methods:{
			save(){
				axios.put("http://localhost:9090/staff/"+this.item.id,{name:this.item.name,sex:this.item.sex,profile:this.item.profile,age:this.item.age})
				.then((res)=>{
					this.$router.push({name:"staff"})
				})
				.catch(()=>{
					console.log("出错了")
				})
			}
		}
	}
</script>