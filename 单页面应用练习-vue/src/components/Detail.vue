<style scoped>
	.content{
		padding:0 10px 40px 10px;
	}
</style>
<template>
	<div class="content">
		<h1>新闻详情</h1>
		<h4>{{detail.title}}</h4>
		<span>发布时间:{{detail.add_time}}</span>
		<div v-html="detail.content"></div>
	</div>
</template>
<script>
	import axios from "axios"
	import config from "../config.js"
	export default {
		data(){
			return{
				detail:{}
			}
		},
		created(){
			const id=this.$route.params.myid
			axios.get(config.apiDomain+"/api/getnew/"+id).then((res)=>{
				// console.log(res)
				this.detail=res.data.message[0]
			})
		}
	}
</script>