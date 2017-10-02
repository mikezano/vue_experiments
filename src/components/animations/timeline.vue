<template lang="pug">

	.cell
		.transition-container
			.emoji(
				v-if="isEmojiVisible"
				v-bind:class="{'halfway' : isHalfway()}") 😎
			


		.time-line-container
			#red-dot
			.line
			.time-line
				#start.step(@click="next($event)") Start
				#click-leave.step(@click="next($event)") Click
				#one-frame-leave.step(@click="next($event)") 1 Frame later
				#halfway-leave.step(@click="next($event)") Halfway
				#done-leave.step(@click="next($event)") Done
				#click-enter.step(@click="next($event)") Click
				#one-frame-enter.step(@click="next($event)") 1 Frame later
				#one-frame-enter.step(@click="next($event)") Halfway
				#done-enter.step(@click="next($event)") Finish!


		.animation-class-container
			button(@click="advanceToNext(-1)") &#xab; Prev
			button(@click="advanceToNext(1)") Next &#xbb;

			.html
				label HTML
				
				pre.blue-code
					p &lt;transition name=&#34fade&#34&gt;
					p(v-if="isDisplayDivTag")   &lt;div v-if=&#34isVisible&#34 class=&#34{{currentClassState}}&#34&gt;
					p &lt;/transition&gt;
			.css
				label CSS
				pre(v-if="isLeaveVisible")
					span.purple-code fade-leave
					span.blue-code { opacity: 1;}
				pre(v-if="isLeaveActiveVisible")
					span.purple-code fade-leave-active
					span.blue-code { transition: opacity 5s ease-in;}
				pre(v-if="isLeaveToVisible")
					span.purple-code fade-leave-to
					span.blue-code {opacity: 0;}
				pre(v-if="isEnterVisible")
					span.purple-code fade-enter
					span.blue-code { opacity: 0;}
				pre(v-if="isEnterActiveVisible")
					span.purple-code fade-enter-active
					span.blue-code { transition: opacity 5s ease-in;}
				pre(v-if="isEnterToVisible")
					span.purple-code fade-enter-to
					span.blue-code {opacity: 1;}					
			.css
				label JS
				pre
					span.purple-code isVisible 
					span.blue-code = {{isVisible}};			
</template>

<script>
export default {
	data: () => {
		return {
			isVisible:true,
			isEmojiVisible:true,
			isLeaveVisible: true,
			isLeaveActiveVisible: true,
			isLeaveToVisible: true,
			isEnterVisible: true,
			isEnterActiveVisible: true,
			isEnterToVisible: true,			
			isDisplayDivTag: true,
			appliedClass: "",
			classHash: [
				{ id: "#start", class: "emoji"},
				{ id: "#click-leave", class: "emoji fade-leave fade-leave-active"},
				{ id: "#one-frame-leave", class: "emoji fade-leave-active fade-leave-to"},
				{ id: "#halfway-leave", class: "emoji fade-leave-active fade-leave-to"},
				{ id: "#done-leave", class: ""},
				{ id: "#click-enter", class: "emoji fade-enter fade-enter-active"},
				{ id: "#one-frame-enter", class: "emoji fade-enter-active fade-enter-to"},
				{ id: "#halfway-enter", class: "emoji fade-enter-active fade-enter-to"},
				{ id: "#done-enter", class: "emoji"}			
			],
			currentClassState:"",
			currentHashItem: null,
			leftOffset:0
		}
	},
	mounted(){
		this.leftOffset = 
			document
			.getElementById("red-dot")
			.getBoundingClientRect()
			.left;

		this.advanceDot('start');
	},
	methods: {
		isHalfway(){
			return this.currentHashItem ? this.currentHashItem.id == ("#halfway-leave" || "#halfway-enter") : false;
		},
		classVisiblility(step){
			switch(step){
				case '#start':
				case '#done-leave':
					this.isLeaveVisible = false;
					this.isLeaveActiveVisible = false;
					this.isLeaveToVisible = false;
					this.isDisplayDivTag = step == '#done-leave' ? false : true;
					this.isEmojiVisible = step == '#done-leave' ? false : true;
					this.isEnterVisible = false;
					this.isEnterActiveVisible = false;
					this.isEnterToVisible = false;
				break;
				case '#click-leave':
					this.isLeaveVisible = true;
					this.isLeaveActiveVisible = true;
					this.isLeaveToVisible = false;
					this.isVisible = false;
				break;
				case '#one-frame-leave':
				case '#halfway-leave':
					this.isLeaveVisible = false;
					this.isLeaveActiveVisible = true;
					this.isLeaveToVisible = true;
				break;		
				case '#click-enter':
					this.isDisplayDivTag = true;
					this.isEmojiVisible = false;
					this.isEnterVisible = true;
					this.isEnterActiveVisible = true;
					this.isEnterToVisible = false;	
					this.isVisible = true;			
				break;		
				case '#one-frame-enter':
					this.isEnterVisible = false;
					this.isEnterToVisible = true;
					this.isEnterActiveVisible = true;
				break;
				case '#halfway-enter':
					this.isEnterVisible = false;
					this.isEnterActiveVisible = true;
					this.isEnterToVisible = true;
					this.isEmojiVisible = true;
				break;
				case '#done-enter':
				break;
			}
		},
		advanceToNext(direction){
			
			let i = this.classHash.findIndex((element) => {
				return element.id == this.currentHashItem.id;
			});
			i = i < 1 ? 0 : i;
			this.currentHashItem = this.classHash[ ( i + direction ) % this.classHash.length ];
			this.advanceDot(this.currentHashItem.id.replace("#",""));
		},
		next(event){
			let element = event.target;
			this.advanceDot(element.id);
		},
		advanceDot(id){
			let element = document.getElementById(id);
			let coords = element.getBoundingClientRect();
			var r = document.getElementById("red-dot");
			let coords_r = r.getBoundingClientRect();
			r.style.left = (coords.left - this.leftOffset )+"px";
			let i = this.classHash.filter((obj)=>{
				return obj.id == "#"+element.id;
			})[0];
			console.log(i);
			this.currentClassState = i.class;
			this.currentHashItem = i;

			this.classVisiblility(this.currentHashItem.id);
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

	.transition-container{
		height:133px;
	}
	.halfway{
		opacity: 0.5;
	}
	.time-line-container{
		width:80%;
		position:relative;
		margin-top:30px;

		#red-dot{
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
			//align-items:center;
			//justify-content: space-around;
			
			#halfway{
				flex-grow: 3;
			}

			.step{
				flex-grow:1;
				border-bottom:2px solid transparent;
				text-align:left;
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
		
		.html, .css{
			background-color:#333;
			padding:10px;
			margin:10px;
			height:150px;
			label{
				color:white;
			}
		}
		padding-top:60px;
		pre{
			font-size:20px;
			text-align:left;
		}
		.purple-code{
			color: lighten(purple, 10%);
		}
		.blue-code{
			color: lighten(blue, 20%);
		}
	}
</style>