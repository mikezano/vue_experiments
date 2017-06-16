<template>
  <div id="app">
		<side_menu></side_menu>
    <img src="./assets/logo.png">
		
    <router-view></router-view>
  </div>
</template>

<script>

import side_menu from './components/side_menu'

export default {
  name: 'app',
	components:{
		side_menu
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
