<template>
  <div id="app">
    <top></top>
    <leftnav></leftnav>
    <rightcontent></rightcontent>
  </div>
</template>

<script>
	import Top from "./components/top"
	import Leftnav from "./components/leftnav"
	import Rightcontent from "./components/rightcontent"
export default {
  name: 'App',
  components:{
  	Top,
  	Leftnav,
  	Rightcontent
  },
	beforeCreate(){
		this.$router.push("/home");
	}
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
