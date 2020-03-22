<template>
	<div>
		<h2>order管理</h2>
		<ul class="ordernav">
			<router-link tag="li" to="/order/his" active-class="line">历史订单</router-link>
		    <router-link tag="li" to="/order/now" active-class="line">现有订单</router-link>
		</ul>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:"order"
	}
</script>

<style>
	.show{
		width: 100%;
		height: 300px;
		background: #D3D3D3;
	}
	.ordernav{
	   width: 400px;
	   display: flex;
	}
	.ordernav li{
		flex: 1;
		list-style: none;
		height: 40px;
		line-height: 40px;
		cursor: pointer;
	}
	.line{
		border-bottom: 2px solid rgb(45,175,203);
	}
</style>