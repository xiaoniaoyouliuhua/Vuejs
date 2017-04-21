<style scoped>
		.main img{
			display:flex;
			/* flex:1; */
			justify-content:center;
			align-items:center;
		}
		
</style>
<template>
	<div >
		<h1>
			我是图片分享!
		</h1>
		<button @click="go(21)">美女</button>
		<button @click="go(22)">风景</button>
		<button @click="go(24)">杀马特</button>
		<button @click="go(23)">洗剪吹</button>
		<div class="main"  v-for="item in message">
			<img :src="imgDomain + item.img_url" alt="">
			<p>{{item.zhaiyao}}</p>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	import config from "../config.js"
	export default{
		data(){
			return{
				imgDomain: config.imgDomain,
				message:[]
			}
		},
		created(){
			// const youid = this.$route.params.youid
   //  // $router
   //  // father
   //  // 发请求获取图片信息
   //  axios.get(config.apiDomain + '/api/getimages/'+youid)
   //  .then((res) => {
   //    // console.log(res)
   //    this.message = res.data.message
   //   })
 		 this.getData()
		},
		methods:{
			go(arg){
				this.$router.push({name:"ppic",params:{youid:arg}})
				this.getData()
			},
			getData(){
				const youid = this.$route.params.youid
				axios.get(config.apiDomain+"/api/getimages/"+youid).then((res)=>{
					this.message=res.data.message
				})
			}
		}
	}
</script>