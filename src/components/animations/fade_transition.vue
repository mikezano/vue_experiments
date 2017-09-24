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
				
			//button(@click="toggleFading") Fade 
			pre &lt;div class=&#34{{currentClassState}}&#34&gt;
			//button(@click="next") Next State
			//div {{currentClassState}}

			.time-line-container
				#current
				.line
				.time-line
					#start.step(@click="next($event)") Start
					#click.step(@click="next($event)") Click
					#one-frame.step(@click="next($event)") 1 Frame later
					#halfway.step(@click="next($event)") Halfway
					#done.step(@click="next($event)") Done

			.animation-class-container
				button &#xab; Prev
				button(@click="advance()") Next &#xbb;
				div
					pre 
						span.purple-code fade-leave 
						span { opacity: 1;}
					pre 
						span.purple-code fade-leave-active
						span { transition: opacity 5s ease-in;}
					pre
						span.purple-code fade-leave-to
						span {opacity: 0;}
	</template>

<script>
export default {
	data: () => {
		return {
			isVisible:true,
			appliedClass: "",
			classStates: [
				"emoji",
				"emoji fade-leave fade-leave-active",
				"emoji fade-leave-active fade-leave-to",
				"",
				"emoji fade-enter fade-enter-active",
				"emoji fade-enter-active fade-enter-to"
			],
			classHash: [
				{ id: "#start", class: "emoji"},
				{ id: "#click", class: "emoji fade-leave fade-leave-active"},
				{ id: "#one-frame", class: "emoji fade-leave-active fade-leave-to"},
				{ id: "#halfway", class: "emoji fade-leave-active fade-leave-to"},
				{ id: "#done", class: ""}
			],
			currentClassState:"",
			currentClassIndex:0,
			currentHashItem: null,
			leftOffset:0
		}
	},
	mounted(){
		this.leftOffset = 
			document
			.getElementById("current")
			.getBoundingClientRect()
			.left;

		this.currentClassState = this.classStates[0];
		this.currentHashItem = this.classHash.filter((obj) => {
			return obj.id == "#start";
		})[0];
	},
	methods: {
		stepClick(event){
			console.log(event);
		},
		advance(){

			let j = this.classHash.findIndex((element) => {
				return element.id == this.currentHashItem.id;
			});
			this.currentHashItem = this.classHash[ ( j + 1 ) % this.classHash.length ];
			
			console.log(this.currentHashItem);
			this.advanceDot(this.currentHashItem.id.replace("#",""));
		},
		next(event){
			let element = event.target;
			this.advanceDot(element.id);
		},
		advanceDot(id){
			let element = document.getElementById(id);
			let hashKey = "#" + element.id;
			let coords = element.getBoundingClientRect();
			var a = document.getElementById("current");
			let coords_a = a.getBoundingClientRect();
			a.style.left = (coords.left - this.leftOffset )+"px";
			let i = this.classHash.filter((obj)=>{
				return obj.id == hashKey;
			})[0];
			console.log(i);
			this.currentClassState = i.class;
			this.currentHashItem = i;
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
				border-bottom:2px solid transparent;
				&:hover{
					cursor: pointer;
					border-bottom:2px solid $vue_green;
				}
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

	.animation-class-container{

		padding-top:30px;
		pre{
			font-size:30px;
		}
		.purple-code{
			color: purple;
		}
	}
</style>