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
			button(@click="next") Next State
			div {{currentClassState}}

			.time-line-container
				#current
				.line
				.time-line
					.step(@click="next($event)") Start
					.step(@click="next($event)") 1 Frame later
					.step(@click="next($event)") Halfway
					.step(@click="next($event)") Done

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
			currentClassIndex:0,
			leftOffset:0
		}
	},
	mounted(){
		this.leftOffset = 
			document
			.getElementById("current")
			.getBoundingClientRect()
			.left;
	},
	methods: {
		stepClick(event){
			console.log(event);
		},
		next(event){
			let element = event.target;
			let coords = element.getBoundingClientRect();
			console.log(coords);
			var a = document.getElementById("current");
			let coords_a = a.getBoundingClientRect();
			//a.style.top = coords.top+"px";
			a.style.left = (coords.left - this.leftOffset )+"px";
			console.log(a);
			//this.currentClassState = this.classStates[this.currentClassIndex % 6]
			//this.currentClassIndex++;
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

.time-line-container{
	width:80%;
	position:relative;
	margin-top:30px;

	#current{
		position: absolute;
		z-index:2;
		width:10px;
		height: 10px;
		border-radius: 10px;
		background-color:red;
		border:2px solid darken(red, 20%);
		transition:all 0.5s ease-in-out;
	}

	.line{
		background-color:$vue_green;
		width:100%;
		height:4px;
		position: absolute;
		top:4px;
		z-index:0;
	}

	.time-line{
		position:absolute;
		width:100%;
		display: flex;
		align-items:center;
		justify-content: space-around;
		
		.step{

			&:before{
				content: "";
				display:block;
				width:10px;
				height: 10px;
				border-radius:10px;
				background-color:$vue_green;
				border:2px solid darken($vue_green, 20%);
			}
		}
	}
}

</style>