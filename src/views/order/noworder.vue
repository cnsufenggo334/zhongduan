<template>
	<div>
		<h3>食品列表</h3>
		<el-table
		v-loading="loading"
		element-loading-text="拼命加载中......"
		element-loading-background="rgba(0, 0, 0, 0.5)"
    		element-loading-spinner="el-icon-loading"
		:data="tableData"
		style="width: 100%;height: calc(100vh - 100px);">
			        <el-table-column
			        prop="name"
			        label="名称">
			        </el-table-column>
			        <el-table-column
			        prop="description"
			        label="配料">
			        </el-table-column>
			        <el-table-column
			        prop="tips"
			        label="月售与评价">
			        </el-table-column>
			        <el-table-column
			        label="操作">
			        	<el-row>
						  <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
						  <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
					</el-row>
			        </el-table-column>   
		</el-table>
	</div>
</template>

<script>
	export default{
		name:"hisorder",
		data() {
		        return {
		          tableData: [],
		          loading:true
		        }
		},
		created(){
			this.getData();
		},
		methods:{
		  	async getData(){
		  		this.tableData = await this.$api.get('/elem/shopping/v2/foods',{offset:0,limit:8,restaurant_id:1})
				this.loading = false;
//				console.log(this.tableData)
		  	}
		}
	}
</script>

<style>
</style>