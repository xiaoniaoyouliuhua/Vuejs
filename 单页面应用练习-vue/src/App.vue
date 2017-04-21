<style>
	.content{
		margin-top:40px;
	}
	body{
		margin: 0;
		padding: 0;
	}
	.mint-tabbar{
		position:fixed !important;
	}
</style>
<template>
	<div>
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="content">
			<router-view></router-view>
		</div>
		<mt-tabbar v-model="selected">
		<mt-tab-item id="home">
		<img slot="icon" src="../statics/images/menu3.png" >
		首页
	</mt-tab-item>
	<mt-tab-item id="vvip">
	<img slot="icon" src="../statics/images/menu4.png">
	会员
	</mt-tab-item>
	<mt-tab-item id="cart">
	<img slot="icon" src="../statics/images/menu5.png">
	购物车
	</mt-tab-item>
	<mt-tab-item id="search">
	<img slot="icon" src="../statics/images/menu6.png">
	搜索
	</mt-tab-item>
</mt-tabbar>
</div>
</template>
<script>
	export default{
		data(){
			return {
				selected:""
			}
		},
		updated(){
			this.$router.push({name:this.selected})
		}
	}
</script>