//引入store
import Vuex from 'vuex';//npm install vuex
import Vue from 'vue';
Vue.use(Vuex);

//1.存储数据 
let state = {
	count:0,
	list:[{
	    "id": 11,
	    "name": "鱼香肉丝",
	    "price": 12,
	    "count":10
	  }, {
	    "id": 22,
	    "name": "宫保鸡丁",
	    "price": 14,
	     "count":10
	  }, {
	    "id": 34,
	    "name": "土豆丝",
	    "price": 10,
	      "count":10
	  }, {
	    "id": 47,
	    "name": "米饭",
	    "price": 2,
	     "count":10
	  },{
	    "id": 49,
	    "name": "蚂蚁上树",
	    "price": 13,
	     "count":10
	  },
	  {
	    "id": 50,
	    "name": "腊肉炒蒜薹",
	    "price": 15,
	    "count":10
	  }]

}

//2.获取数据
let getters = {
	count(state){
		return state.list;
	},
	totalCount(state){
		let sum = 0;
		state.list.map((item)=>{
			sum+=item.count;
		})
		return sum;
	},
	totalPrice(state){
		let sum = 0;
		state.list.map((item)=>{
			sum+=item.count*item.price;
		})
		return sum;
	}
}

//3.触发修改数据
let actions = {
	add(context){
		context.commit('doAdd')
	},
	addcount(context,id){
		context.commit('addcount',id)
	},
	subcount(context,id){
		context.commit('subcount',id)
	}
}
//4.修改数据
let mutations = {
	doAdd(state){
		state.count++;
	},
	addcount(state,id){
		state.list.find((item)=>item.id==id).count++;
	},
	subcount(state,id){
		state.list.find((item)=>item.id==id).count--;
	}
}
//5.创建vuex对象实例
let store = new Vuex.Store({
	state,getters,actions,mutations
})
//统一导出去
 export default store;



