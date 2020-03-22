<template>
	<div class="leftnavWrap">
		<h2>HAPPY</h2>
		<h2>MMALL</h2>
		<ul class="list">
			<router-link tag="li" active-class="blue" to="/home">首页</router-link>
			<router-link tag="li" active-class="blue"  to="/goods">商品</router-link>
			<router-link tag="li" active-class="blue"  to="/cate">品类</router-link>
			<router-link tag="li" active-class="blue"  to="/order">订单</router-link>
			<router-link tag="li" active-class="blue" to="/user">用户</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"leftnav"
	}
</script>

<style>
.leftnavWrap{
	width: 200px;
	height: 100%;
	background: rgba(43,46,51,.7);
	position: fixed;
	left: 0;
	top:0;
}
.leftnavWrap h2:first-child{
	margin-top: 20px;
}
.leftnavWrap .list li{
	height: 40px;
	line-height: 40px;
	cursor: pointer;
}
.blue{
	background:rgb(45,175,203)
}
</style>