<template>
	<div>
		<el-table
		      	:data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
		      	height="calc(100vh - 200px)"
		      	border
		      	v-loading="loading"
		      	element-loading-text="拼命加载中......"
			element-loading-background="rgba(245,108,108, 0.5)"
	    		element-loading-spinner="el-icon-loading"
		     	style="width: 100%;height: calc(100vh - 100px);">
		     	<el-table-column
		    	label="注册日期">
		    	<template slot-scope="scope">
			    	<i class="el-icon-time"></i>
			    	<span style="margin-left: 10px">{{ scope.row.registe_time }}</span>
		    	</template>
		   	</el-table-column>
		   	<el-table-column
		      	prop="username"
		        label="姓名">
		      	</el-table-column>
		      	<el-table-column
		        label="操作">
		        	<el-row>
				  	<el-button type="primary" size="mini">修改</el-button>
				  	<el-button type="danger" size="mini">删除</el-button>
				</el-row>
		      	</el-table-column>
		</el-table>
		<el-pagination 
		small
		background 
		layout="total,prev,pager,next,jumper" 
		:total="tableData.length"
		:page-size="pagesize"
		:pager-count="pagercount"
		:current-page="currentPage"
		@current-change="handleCurrentChange"
		>
		</el-pagination>
	</div>
</template>

<script>
	export default{
		name:"user",
		data() {
		        return {
			        tableData: [],
			        loading:true,
			        pagesize:5,
			        pagercount:5,
				currentPage:1
		        }
		},
		created(){
			this.getData();
		},
		methods:{
		  	async getData(){
		  		this.tableData = await this.$api.get('/elem/v1/users/list',{offset:0,limit:100})
		  		this.loading = false;
		  	},
		  	handleCurrentChange(val){
				this.currentPage = val;			
			}
		}
	}
</script>

<style>
</style>