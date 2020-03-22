<template>
	<div class="loginWrap">
			<span @click="dologindetail">{{login}}</span>
			<slot name="img1"></slot>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		name:"login",
		props:["login","bol"],
		methods:{
			dologindetail(){
				this.$router.push("/home/logindetail");
			}
		}
	}
</script>

<style scoped="scoped">
	.loginWrap{
		width: 100px;
		height: 50px;
		position: absolute;
		right: 0;
		top: 0;
	}
	.loginWrap span{
		font-size: 14px;
		cursor: pointer;
		position: absolute;
		right: 50px;
		top: 15px;
	}
	.loginWrap img{
		width: 30%;
		position: absolute;
		right: 10px;
		top: 10px;
	}
</style>