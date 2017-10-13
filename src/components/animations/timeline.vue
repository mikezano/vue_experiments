<template lang="pug">

	.main-div
		.transition-container
			.emoji(
				v-if="isEmojiVisible"
				v-bind:class="{'halfway' : isHalfway()}") 😎
			
		.time-line-container
			#red-dot
			.line
			.time-line
				#start.step(@click="next($event)") Start
				#click-leave.step(@click="next($event)") Click Event
				#one-frame-leave.step(@click="next($event)") 1 Frame later
				#halfway-leave.step(@click="next($event)") Halfway
				#done-leave.step(@click="next($event)") Done
				#click-enter.step(@click="next($event)") Cick Event
				#one-frame-enter.step(@click="next($event)") 1 Frame later
				#halfway-enter.step(@click="next($event)") Halfway
				#done-enter.step(@click="next($event)") Done


		.animation-class-container
			button(@click="advanceToNext(-1)") &#xab; Prev
			button(@click="advanceToNext(1)") Next &#xbb;

			.js
				label JS
				pre
					span.purple-code var isVisible 
					span.blue-code = {{isVisibleVar}};
			.html
				label HTML
				
				pre.purple-code
					p &lt;transition name=&#34fade&#34&gt;
					p(v-if="isEmojiDivVisible")  &lt;div 
					p(v-if="isEmojiDivVisible")    v-if=&#34isVisible&#34
					p(v-if="isEmojiDivVisible")
						|    class=&#34
						span.blue-code {{currentClassState}}
						| &#34&gt;
					p(v-if="isEmojiDivVisible")    😎
					p(v-if="isEmojiDivVisible")  &lt;/div&gt;
					p &lt;/transition&gt;
			.css
				label CSS
				pre(v-bind:class="{'mute' : !isLeaveVisible}")
					span.purple-code fade-leave
					span.blue-code { opacity: 1;}
				pre(v-bind:class="{'mute' : !isLeaveActiveVisible}")
					span.purple-code fade-leave-active
					span.blue-code { transition: opacity 5s ease-in;}
				pre(v-bind:class="{'mute' : !isLeaveToVisible}")
					span.purple-code fade-leave-to
					span.blue-code {opacity: 0;}
				pre(v-bind:class="{'mute' : !isEnterVisible}")
					span.purple-code fade-enter
					span.blue-code { opacity: 0;}
				pre(v-bind:class="{'mute' : !isEnterActiveVisible}")
					span.purple-code fade-enter-active
					span.blue-code { transition: opacity 5s ease-in;}
				pre(v-bind:class="{'mute' : !isEnterToVisible}")
					span.purple-code fade-enter-to
					span.blue-code {opacity: 1;}
	</template>

<script>
export default {
	data: () => {
		return {
			isVisibleVar:true,
			isLeaveVisible: true,
			isLeaveActiveVisible: true,
			isLeaveToVisible: true,
			isEnterVisible: false,
			isEnterActiveVisible: false,
			isEnterToVisible: false,
			isEmojiVisible: true,
			isEmojiDivVisible: true,
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
			if(this.currentHashItem){
				return this.currentHashItem.id == "#halfway-leave" || this.currentHashItem.id == "#halfway-enter";
			}
			return false;
		},
		setVisibilities(ilv, ilav, iltv, iev, ieav, ietv, iemv, iemdv, ivv){
			this.isLeaveVisible = ilv;
			this.isLeaveActiveVisible = ilav;
			this.isLeaveToVisible = iltv;
			this.isEnterVisible = iev;
			this.isEnterActiveVisible = ieav;
			this.isEnterToVisible = ietv;
			this.isEmojiVisible = iemv;
			this.isEmojiDivVisible = iemdv;
			this.isVisibleVar = ivv;
		},
		classVisiblility(step){
			switch(step){
				case '#start':
					this.setVisibilities(false, false, false, false, false, false, true, true, true);
				break;
				case '#click-leave':
					this.setVisibilities(true, true, false, false, false, false, true, true, false);
				break;
				case '#one-frame-leave':
					this.setVisibilities(false, true, true, false, false, false, true, true, false);
				break;
				case '#halfway-leave':
					this.setVisibilities(false, true, true, false, false, false, true, true, false);
				break;
				case '#done-leave':
					this.setVisibilities(false, false, false, false, false, false, false, false, false);
				break;
				case '#click-enter':
					this.setVisibilities(false, false, false, true, true, false, false, true, true);
				break;
				case '#one-frame-enter':
					this.setVisibilities(false, false, false, false, true, true, false, true, true);
				break;
				case '#halfway-enter':
					this.setVisibilities(false, false, false, false, true, true, true, true, true);
				break;
				case '#done-enter':
					this.setVisibilities(false, false, false, false, false, false, true, true, true);
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
		}
	}
}
</script>

<style lang="scss" scoped>

@import '../../sass/global.scss';


.main-div{
	display: flex;
	flex-direction: column;
	align-items:center;
}


.transition-container{
	min-height:140px;

	.emoji{
		font-size:100px;
	}
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
		
		.html, .css, .js{
			background-color:#333;
			padding:4px 8px;
			margin:4px;

			label{
				color:white;
			}

			p{padding:0; margin:0;}
		}

		.js{
			margin-top:20px;
		}
		padding-top:60px;
		pre{
			font-size:16px;
			text-align:left;
			margin:0;

			&.mute span{
				color:#555;
			}
		}
		.purple-code{
			color: lighten(purple, 10%);
		}
		.blue-code{
			color: lighten(blue, 20%);
		}
	}
</style>