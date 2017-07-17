<template lang="pug">
	svg(class="magnifier" 
		width="500px" 
		height="500px" 
		viewBox="0 0 1000 1000")
		circle(
			class="c1" 
			cx="100" 
			cy="100" 
			r="50" 
			fill="hsla(122, 40%, 59%, 1)" 
			stroke="hsla(122, 40%, 49%, 1)"
			stroke-width="10")
		circle(
			class="c2" 
			cx="200" 
			cy="200" 
			r="50" 
			fill="hsla(222, 40%, 59%, 1)" 
			stroke="hsla(222, 40%, 49%, 1)"
			stroke-width="10")
		circle(
			class="c3" 
			cx="300" 
			cy="300" 
			r="50" 
			fill="hsla(322, 40%, 59%, 1)" 
			stroke="hsla(322, 40%,49%, 1)"
			stroke-width="10")    
</template>


<script>
import {TimelineMax} from 'gsap';

export default {
  data: () => {
      return {
          isSliding:true
      }
  },
  methods: {
      toggleSlide (){
          this.isSliding = !this.isSliding;
      },
	sceneOne(){
		var tl = new TimelineMax();
		tl.to(".c1", 1, {x:300, ease: Power4.easeOut});
		tl.add("one");
		tl.to(".c2", 1, {x:300, ease: Power4.easeOut}, "one");;
		tl.to(".c3", 1, {x:300, ease: Power4.easeOut}, "one");
		return tl;
	},
	sceneTwo(){
		var tl = new TimelineMax();
		tl.to(".c1", 1, {x:0, ease: Power4.easeOut});
		tl.add("out");  
		tl.to(".c2", 1, {scale:1.5, ease: Power4.easeOut}, "out");
		tl.to(".c3", 1, {x:0, ease: Power4.easeOut}, "out");  
		return tl;
	},
	master(){
		var master = new TimelineMax({repeat: -1});
		master.add(this.sceneOne(), "scene1")
			.add(this.sceneTwo(), "scene2");	
	}
  },
	mounted(){
		this.master();
		//alert(this.isSliding);
	}  
}
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active{
  transition: all 0.5s ease-out;
}

.slide-enter, .slide-leave-to{
    opacity:0;
}

.slide-enter{
    transform: translateX(-20px);
}
.slide-leave-to{
    transform: translateX(20px);
}
</style>

