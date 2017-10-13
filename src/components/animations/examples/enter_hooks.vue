<template lang="pug">
	.cell
		button(@click="toggleEnterHooks") Enter Hooks
		transition(
			name="animated"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:after-enter="afterEnter"
			v-on:enter-cancelled="enterCancelled")
			.emoji(v-if="isEnteringHooks") 👽
</template>


<script>

import Velocity from 'velocity-animate';

export default {
  data: () => {
	  return {
		  isEnteringHooks:true
	  }
  },
  methods: {
		toggleEnterHooks() {
			this.isEnteringHooks = !this.isEnteringHooks;
		},
		beforeEnter(){
		   alert('beforeEnter');
		   
		},
		enter(){
			alert('enter');
			//Velocity(el, {opacity: 1, fontSize: '10em'}, {duration:100});
			//Velocity(el, { fontSize: '4em' }, { duration:100, complete: done });

		},
		afterEnter (){
			alert('afterEnter');
			// Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration:1000 });
			// Velocity(el, { rotateZ: '100deg' }, { loop: 2, duration:100 });
			// Velocity(el, {
			//     rotateZ: '45deg',
			//     translateY: '30px',
			//     translateX: '30px',
			//     opacity: 1
			// }, { duration:500, complete: done });
		},
		enterCancelled(){
			alert('enterCancelled');
		}
	}
}
</script>

<style lang="scss" scoped>

.animated-enter-active{
	animation:travel 1s linear;
}

.animated-leave-active{
	animation:fade-spin 1s linear;
}

@mixin xy($x, $y, $deg){
	transform: translateX($x) translateY($y) rotate($deg);
}

@keyframes travel {
	0%  {   @include xy(0, 0,0); opacity:0;}
	20% {   @include xy(-50px, 0, 72deg);}
	40% {   @include xy(-50px, -50px, 144deg);}
	60% {   @include xy(50px, -50px, 216deg);}
	80% {   @include xy(50px, 0, 288deg);}
	100%{   @include xy(0, 0, 360deg); opacity:1;}
}

@keyframes fade-spin {
	100%  {   
		transform: rotateY(360deg) scale(4);
		opacity:0;
	}
}
</style>
