<style>
	.menu{
		background-color: skyblue;
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		width: 150px;
	}
	.main{
		margin-left:150px;
	}
</style>
<template>
<div>
	<div class="menu">
		<ul class="list-group">
			<li class="list-group-item list-group-item-success"><router-link :to="{name:'staff'}">普通职工管理</router-link></li>
			<li class="list-group-item list-group-item-info"><router-link :to="{name:'leader'}">领导层职工管理</router-link></li>
		</ul>
	</div>
	<div class="main">
		<router-view></router-view>
	</div>
	</div>
</template>
<script>

</script>