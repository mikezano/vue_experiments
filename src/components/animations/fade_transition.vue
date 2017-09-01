<template lang="pug">
	.container
		.cell
			.transition-container
				transition(name="fade"
					v-on:before-enter="beforeEnter"
					v-on:enter="enter"
					v-on:after-enter="afterEnter"
					v-on:enter-cancelled="enterCancelled"
					v-on:before-leave="beforeLeave"
					v-on:leave="leave"
					v-on:after-leave="afterLeave"
					v-on:leave-cancelled="leaveCancelled")
					.emoji(v-if="isVisible") 😎
				
			button(@click="toggleFading") Fade 
			pre &lt;div class=&#34{{appliedClass}}&#34&gt;
			button(@click="nextState") Next State
			div {{currentClassState}}
</template>

<script>
export default {
	data: () => {
		return {
			isVisible:true,
			appliedClass: "",
			classStates: [
				"eomji",
				"emoji fade-leave fade-leave-active",
				"emoji fade-leave-active fade-leave-to",
				"",
				"emoji fade-enter fade-enter-active",
				"emoji fade-enter-active fade-enter-to"
			],
			currentClassState:"",
			currentClassIndex:0
		}
	},
	methods: {
		nextState(){
			this.currentClassState = this.classStates[this.currentClassIndex % 6]
			this.currentClassIndex++;
		},
		beforeEnter(){
			alert('beforeEnter');
			this.appliedClass = "fade-enter";
		},
		enter(){
			this.appliedClass  = "fade-enter fade-enter-active";
			alert('enter');
		},
		afterEnter(){
			this.appliedClass = "";
			alert('afterEnter');
		},
		enterCancelled(){
			alert('enterCancelled');
		},
		beforeLeave(){
			this.appliedClass = "fade-leave";
			alert('beforeLeave');
		},
		leave(){
			this.appliedClass = "fade-leave fade-leave-active";
			alert('leave');
		},
		afterLeave(){
			this.appliedClass = "";
			alert('afterLeave');
		},
		leaveCancelled(){
			alert('leaveCancelled');
		},
		toggleFading (){
			this.isVisible = !this.isVisible;
		}
	}
}
</script>

<style lang="scss">

$vue_green: hsla(153, 50%, 48%, 1);

.fade-enter-active, .fade-leave-active{
	transition: opacity 5s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}

.fade-enter-to, .fade-leave{
	opacity:1;
}
</style>