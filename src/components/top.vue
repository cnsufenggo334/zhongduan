<template>
	<div class="topWrap">
		<login login="登录" :bol="true">
			<img slot="img1" src="../assets/logo.png"/>
		</login>
	</div>
</template>

<script>
	import login from '../views/login'
	export default{
		name:"top",
		components:{
			login
		}
	}
</script>

<style scoped="scoped">
	.topWrap{
		width: 100%;
		height: 50px;
		background: rgb(255,255,255);
		border-bottom: 1px solid #EEEEEE;
	}
	.loginWrap{
		width: 100px;
		height: 50px;
		position: absolute;
		right: 0;
		top: 0;
	}
	.loginWrap img{
		width: 30%;
		position: absolute;
		right: 30px;
		top: 10px;
	}
</style>