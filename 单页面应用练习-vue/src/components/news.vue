<style>
	.newul,.newul li{
		margin: 0;
		padding: 0;
	}
	.newul{
  		padding-bottom: 40px;
	}
	.newul li{
		list-style: none;
		display:flex;
	}
	.left{
		width: 25%;
	}
	.left img{
		width: 80%;
	}
	h4{
		margin-top:0;
	}
	.right{
		flex:1;
	}
</style>
<template>
	<div>
		<h1>我是新闻组件</h1>
		<ul class="newul">
			<li @click="go(item.id)" v-for="item in massage">
				<div class="left">
					<img :src="item.img_url" alt="">
				</div>
				<div class="right">
					<h4>{{item.title}}</h4>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from "axios"
	import config from "../config.js"
	export default{
		data(){
			return {
				massage:[]
			}
		},
		created(){
			axios.get(config.apiDomain+"/api/getnewslist").then((res)=>{
				// console.log(res)
				this.massage=res.data.message
			})
		},
		methods:{
			go(id){
				this.$router.push({name:"detail",params:{myid:id}})
			}
		}
	}
</script>