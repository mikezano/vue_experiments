<template lang="pug">
	svg(class="magnifier" 
 
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

		rect(class="blue"  width="100" height="100" x="20"  y="50" rx="10", ry="10")
		rect(class="blue" width="100" height="150" x="40"  y="25" rx="10", ry="10")
		rect(class="blue" width="120" height="50"  x="110" y="50" rx="10", ry="10")
		rect(class="blue" width="200" height="50"  x="50"  y="33" rx="10", ry="10")
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
		tl.to(".c1", 1, {x:400, bezier:[{x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0}], ease: Power4.easeOut});
		tl.to(".blue", 1, {x:10, ease: Power1.easeOut});
		tl.add("one");
		tl.to(".c2", 1, {x:300, ease: Power4.easeOut}, "one");;
		tl.to(".c3", 1, {x:300, ease: Power4.easeOut}, "one");
		return tl;
	},
	sceneTwo(){
		var tl = new TimelineMax();
		tl.to(".c1", 1, {x:200, ease: Power4.easeOut});
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

<style lang="scss" scoped>

$intelBlue: hsla(206, 100%, 39%, .7);
.blue{
	fill: $intelBlue;
	stroke: darken($intelBlue, 10%);

}
.blue2{
	fill: darken($intelBlue, 10%);
	stroke: darken($intelBlue, 20%);
}
.blue3{
	fill: lighten($intelBlue, 10%);
	stroke: darken($intelBlue, 20%);
}
.blue4{
	fill: lighten($intelBlue, 20%);
	stroke: darken($intelBlue, 20%);
}
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

