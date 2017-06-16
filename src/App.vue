<template>
  <div id="app">
    <div @click="toggleSideMenu" class="navicon">        
        <icon name="bars" scale="3"></icon>

    </div>
    <transition name="slide">
		  <side_menu v-if="isShowingSideMenu"></side_menu>      
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navicon{

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
