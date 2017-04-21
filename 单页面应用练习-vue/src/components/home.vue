<style>
	.mint-swipe{
  height: 200px !important;
}
	.mint-swipe-item img{
  width: 100% !important;
}
	.myul{
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
		align-items:center;

	}
	.myul,.myul li{
		margin: 0;
		padding: 0;
	}
	.myul li{
		width: 33.33%;
		list-style:none;
		text-align:center;
	}
	.myul li img{
		width: 50%;
	}
</style>
<template>
<div>
	<div>
		<mt-swipe :auto="2000">
    	<mt-swipe-item v-for="item in list">
    	<img :src="item.img" alt="">
    	</mt-swipe-item>
		</mt-swipe>
	</div>
	
	<ul class="myul">
		<li @click="go('news')">
			<img src="../../statics/images/menu5.png"   alt="">
			<p>新闻</p>
		</li>
		<li @click="go('ppic')">
			<img src="../../statics/images/menu5.png"  alt="">
			<p>图片分享</p>
		</li>
		<li>
			<img src="../../statics/images/menu5.png"   alt="">
			<p>新闻</p>
		</li>
		<li>
			<img src="../../statics/images/menu5.png"  alt="">
			<p>新闻</p>
		</li>
		<li>
			<img src="../../statics/images/menu5.png"  alt="">
			<p>新闻</p>
		</li>
		<li>
			<img src="../../statics/images/menu5.png"   alt="">
			<p>新闻</p>
		</li>
	</ul>
	</div>
	
</template>
<script>
	export default{
		data(){
    return {
          list: [{
            url: 'http://www.itcast.cn/subject/phoneweb/index.html',
            img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
          }, {
            url: 'http://www.itcast.cn/subject/phoneweb/index.html',
            img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
          }]
    }
  },
  methods:{
  	go(arg){
  		console.log(arg);
  		this.$router.push({name:arg, params:{youid:23}})
  	}
  	// go1(arg){
  	// 	this.$router.push({name:arg,params:{youid:23}})
  	// }
  }
	}
</script>