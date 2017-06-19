<template>
  <div id="app">
    <div @click="toggleSideMenu" class="navicon">        
        <icon name="bars" scale="2"></icon>
    </div>
    <transition name="slide">
		  <side_menu 
        v-if="isShowingSideMenu" 
        v-on:closeMenu="toggleSideMenu"
      ></side_menu>      
    </transition>


		
    <router-view></router-view>
  </div>
</template>

<script>

import 'vue-awesome/icons/bars'
import icon from 'vue-awesome/components/Icon'
import side_menu from './components/side_menu'

export default {
  name: 'app',
  data () {
    return {
      isShowingSideMenu: false
    }
  },
	components:{
		side_menu,
    icon
	},
  methods: {
    toggleSideMenu(){
      this.isShowingSideMenu = !this.isShowingSideMenu;
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
body{
  $yellow: hsla(0, 0%, 90%,1);
  $yellow2: hsla(0, 0%, 93%, 1);
  $yellow3: rgba(240,166,17,0);
background:
  radial-gradient(circle farthest-side at 0% 50%, $yellow2 23.5%, $yellow3 0)21px 30px,
  radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0) 19px 30px,
  linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0)0 0,
  linear-gradient(150deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
  linear-gradient(30deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
  linear-gradient(90deg,$yellow 2%,$yellow2 0,$yellow2 98%,$yellow 0%)0 0 $yellow2;
background-size:40px 60px;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

.slide-enter-active, .slide-leave-active{
  transition: all 0.5s ease-out;
}

.slide-enter, .slide-leave-to{transform: translateX(-200px);}


</style>
