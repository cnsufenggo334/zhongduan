import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);


let state = {
	count:0
}
let getters = {
	count(state){
		return state.count;
	}
}
let actions = {
	add(context){
		context.commit("doAdd")
	}
}
let mutations ={
	doAdd(state){
		state.count++
	}
}
let store = new Vuex({
	state,getters,actions,mutations
})
export default store;