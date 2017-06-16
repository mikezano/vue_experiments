<template>
	<div class="side-menu">
		<icon name="close" class="close-icon"></icon>
		<div class='header'>			
			<img src="./../assets/logo.png">
			<p>Experiments</p>
		</div>
		
		<ul>
			<li>
				<a href="#/environment">Environment</a>
			</li>
			<li>
				<a href="#/async">Async</a>
			</li>
		</ul>
	</div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'

export default {
  components:{
		icon
	}
}
</script>

<style lang="scss">
$base1: hsla(153, 50%, 48%, 1);
$base2: hsla(211, 28%, 29%, 1);

.close-icon{
	position:absolute;
	right:0;
	margin: 10px 10px 0 0;
}

.side-menu{
	width:200px;
	position:absolute;
	left:0px;
	top:0;
	bottom:0;
	//border-right:1px solid darkgray;
	background: linear-gradient(to right, lightgray, gray);

	color:white;
	box-shadow:2px 2px 20px gray;

	ul{
		list-style-type: none;
		margin:0;
		padding:0;
	}	
		li{
			padding:10px 0;

			a{
				color:white;
				text-decoration:none;
			}
		}
}

.header{
	background:linear-gradient(to right, $base1 , $base2);
	padding: 20px 0;
	display:flex;
	justify-content: center;
	align-items: center;
	img{
		width:30px;
		height:30px;
	}
}
</style>


