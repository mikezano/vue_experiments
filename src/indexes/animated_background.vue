<template>
	<div class="animated-background">
		<p>Hello</p>
		
		<div class="wrapper">
			<div class="cell" @click="move('up-left')">
				<icon
					class="up-left"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('up')">
				<icon
					class="up"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('up-right')">
				<icon
					class="up-right"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('left')">
				<icon
					class="left"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell stop" @click='stop'>
				<icon
					name="stop-circle-o" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('right')">
				<icon
					class="right"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('down-left')">
				<icon
					class="down-left"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
			<div class="cell" @click="move('down')">
				<icon name="chevron-circle-down" scale="5" ></icon>
			</div>
			<div class="cell" @click="move('down-right')">
				<icon
					class="down-right"
					name="chevron-circle-down" 
					scale="5" >
				</icon>
			</div>
		</div>
	</div>
</template>

<script>

import 'vue-awesome/icons/stop-circle-o'
import 'vue-awesome/icons/chevron-circle-down'
import icon from 'vue-awesome/components/Icon'

export default {
	name: 'animated_bg',
	components: {
		icon
	},
	methods: {
		move(direction) {
			console.log(direction);
			document.body.style.animationName = direction;
			document.body.style.animationDuration = '10s';
			document.body.style.animationIterationCount = 'infinite';
		},
		stop(){
			console.log('stop');
			document.body.style.removeProperty('animationName');
			document.body.style.removeProperty('animationDuration');
			document.body.style.removeProperty('animationIterationCount');
			document.body.style.animationName = '';
			document.body.style.animationDuration = '';
			document.body.style.animationIterationCount = '';
		}
	}
}
</script>

<style lang="scss" scoped>
$base1: hsla(153, 50%, 98%, 1);
$base2: hsla(211, 28%, 29%, 1);

body{

    $yellow: hsla(0, 0%, 80%,1);
    $yellow2: hsla(0, 0%, 84%, 1);
    $yellow3: rgba(240,166,17,0);
    background:
        radial-gradient(circle farthest-side at 0% 50%, $yellow2 23.5%, $yellow3 0)21px 30px,
        radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0) 19px 30px,
        linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0)0 0,
        linear-gradient(150deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
        linear-gradient(30deg,$yellow2 24%,$yellow 0,$yellow 26%, $yellow3 0, $yellow3 74%,$yellow 0,$yellow 76%, $yellow2 0)0 0,
        linear-gradient(90deg,$yellow 2%,$yellow2 0,$yellow2 98%,$yellow 0%)0 0 $yellow2;
    background-size:40px 60px;
   // animation: 10s linear scroll infinite;
}

.wrapper{
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0;
	width:300px;
	height:300px;
	margin:auto;
	display:grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
	//grid-auto-rows: minmax(20px, auto);
	grid-gap:0px;
	.cell{
		display:flex;
		justify-content: center;
		align-items:center;
		transition: color .2s linear;
		width:100px;
		height:100px;
		button{
			font-weight:bold;
			width:50px;
			height:50px;
			border:none;
			background:none;
			font-size:60px;
		}


		&:hover{
			color:green;
			cursor:pointer;
			&.stop{
				color:red;
			}
		}
	}

	.up-left{transform:rotate(135deg);}
	.up{transform:rotate(180deg);}
	.up-right{transform:rotate(-135deg);}
	.left{transform:rotate(90deg);}
	.right{transform:rotate(-90deg);}
	.down-left{transform:rotate(45deg);}
	.down-right{transform:rotate(-45deg);}
}
@keyframes up-left{
  100%{background-position:-3000px -3000px;}
}
@keyframes up{
  100%{background-position:0px -3000px;}
}
@keyframes up-right{
  100%{background-position:3000px -3000px;}
}
@keyframes right{
  100%{background-position:3000px 0px;}
}
@keyframes down-right{
  100%{background-position:3000px 3000px;}
}
@keyframes down{
  100%{background-position:0px 3000px;}
}
@keyframes down-left{
  100%{background-position:-3000px 3000px;}
}
@keyframes left{
  100%{background-position:-3000px 0px;}
}
</style>


