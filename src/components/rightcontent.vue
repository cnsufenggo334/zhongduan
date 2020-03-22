<template>
	<div class="rightWrap">
		 <keep-alive>
		 	<router-view v-if="$route.meta.keepAlive"></router-view>
		 </keep-alive>
		 <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	export default{
		name:"rightcontent"
	}
</script>

<style scoped="scoped">
	.rightWrap{
		width: calc(100% - 200px);
		height: calc(100vh - 50px);
		position: fixed;
		left: 200px;
		top:50px;
		background: rgb(243,243,243);
	}
</style>