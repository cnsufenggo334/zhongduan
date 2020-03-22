<template>
	<div>
		<div class="loginWrap" v-if="bol">
			<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
				  <el-form-item label="账号">
				    <el-input v-model="formLabelAlign.username"></el-input>
				  </el-form-item>
				  <el-form-item label="输入密码">
				    <el-input v-model="formLabelAlign.passward"></el-input>
				  </el-form-item>
				  <el-form-item label="再次输入密码">
				    <el-input v-model="formLabelAlign.repassward"></el-input>
				  </el-form-item>
				  <el-form-item>
				  	  <el-button size="medium" @click="dologin">取消</el-button>
					  <el-button type="success" size="medium" @click="dologin">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default{
		name:"logindetail",
		data(){
			return{
				labelPosition: 'right',
			        formLabelAlign: {
			          username: '',
			          passward: '',
			          repassward: ''
			        }
			}
		},
		props:["bol"],
		methods:{
			dologin(){
				this.bol = false;
			}
		}
	}
</script>

<style scoped="scoped">
	.loginWrap{
		width: 500px;
		height: 230px;
		background: rgba(17,190,115,.2);
		position: fixed;
		top: 50%;
		margin-top: -100px;
		left: 50%;
		margin-left: -150px;
		padding: 10px 30px 0 15px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.el-button--default{
		position: absolute;
		left: 0px;
		top: -10px;
	}
	.el-button--success{
		position: absolute;
		right: 50px;
		top: -10px;
	}
</style>