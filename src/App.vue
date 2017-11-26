<template lang="pug">
	#app
		.navicon(@click="toggleSideMenu")
			icon(name="bars" scale="2")
		transition(name="slide-menu")
			side_menu(
				v-if="isShowingSideMenu" 
				v-on:closeMenu="toggleSideMenu")
		
		transition(name="fade" mode="out-in")
			router-view
</template>

<script>

import 'vue-awesome/icons/bars'
import icon from 'vue-awesome/components/Icon'
import side_menu from './components/side_menu'

export default {
	name: 'app',
		data () {
			return {isShowingSideMenu: false}
	},
	components:{
		side_menu,
		icon
	},
	methods: {
		toggleSideMenu(){
			this.isShowingSideMenu = !this.isShowingSideMenu;

		if(this.isShowingSideMenu == true){
			document
				.getElementById("app")
				//need the capture:true to prevent immediate fire of close
				.addEventListener("click", this.closeSideMenu, {capture:true});
		}
	},
	closeSideMenu(){
		this.isShowingSideMenu = false;
		document
			.getElementById("app")
			.removeEventListener("click", this.closeSideMenu);
		}
	},
	mounted () {
	}
}
</script>

<style lang="scss" scoped>


// html{overflow-y:scroll;}

// body{
// 	$yellow: hsla(0, 0%, 90%,1);
// 	$yellow2: hsla(0, 0%, 93%, 1);
// 	$yellow3: rgba(240,166,17,0);
// 	background:
// 		radial-gradient(circle farthest-side at 0% 50%, $yellow2 23.5%, $yellow3 0)21px 30px,
// 		radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0) 19px 30px,
// 		linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0)0 0,
// 		linear-gradient(150deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
// 		linear-gradient(30deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
// 		linear-gradient(90deg,$yellow 2%,$yellow2 0,$yellow2 98%,$yellow 0%)0 0 $yellow2;
// 	background-size:40px 60px;
// 	background-color:blue !important;

// }

.fade-enter-active, .fade-leave-active{
	transition: opacity .25s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-enter-to, .fade-leave{
	opacity:1;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 20px;
}

.navicon{
	position:absolute;
	left:30px;
	top:30px;
	img{
		width:30px;
		height:30px;
	}
}

.slide-menu-enter-active, .slide-menu-leave-active{
	transition: all 0.5s ease-out;
}
.slide-menu-enter, .slide-menu-leave-to{transform: translateX(-200px);}

</style>
