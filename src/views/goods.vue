<template>
	<div>
		<h3>goods管理</h3>
		<el-table
		    :data="count"
		    border
		    :summary-method="getSummaries"
    		    show-summary
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      label="名字"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="price"
		      label="价格"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      label="数量">
		      <template slot-scope="scope">
		      	 <el-button type="primary" round size="mini" @click="subcount(scope.row.id)">-</el-button>
		      	 {{scope.row.count}}
		      	 <el-button type="success" round size="mini" @click="addcount(scope.row.id)">+</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>

<script>
	import store from '../store/index'
	import {mapGetters,mapActions} from 'vuex'
	export default{
		name:"goods",
		store:store,
		computed:mapGetters(["count","totalPrice","totalCount"]),
		methods:{
			...mapActions(["subcount","addcount"]),
			getSummaries(param) {
			        const { columns, data } = param;
			        const sums = [];
			        columns.forEach((column, index) => {
			          if (index === 0) {
			            sums[index] = '合计';
			            return;
			          }else if(index === 1){
			          	sums[index] = "总数量："+this.$store.getters.totalCount+"个";
			          }else if(index === 2){
			          	sums[index] = "总价："+this.$store.getters.totalPrice+"元";
			          }else{
			          	sums[index] = "";
			          }
			        });
			        return sums;
			      }
		}
	}
</script>

<style>
</style>