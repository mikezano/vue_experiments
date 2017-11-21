<template lang="pug">
	.container
		.dd
			h2.dd-title Components
			ul.dd-menu
				li.dd-menu-item A
				li.dd-menu-item B
				li.dd-menu-item C
		dropdown
</template>

<script>
import dropdown from '@/components/drop_down'
export default {
	name: 'test',
	components: {
		dropdown
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../sass/colors.scss';

//@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

$vue_green: hsla(153, 50%, 48%, 1);

.container{
	display:flex;
	align-items:center;
	justify-content:center;
}

$width: 200px;
.dd{
	.dd-title{
		color:white;
		background-color: $vue_green;
		padding:6px 4px;
		width: $width;
		margin:0;
		position:relative;

		&:before{
			content: "";
			display: block;
			border-top: 5px solid $vue_green;
			border-left: ($width / 2) solid transparent;
			border-right: ($width / 2) solid transparent;
			position: absolute;
			top: 100%;
			z-index: 101;
			transition:
				0.2s 0.2s border-top ease-out,
				0.3s border-top-color;
		}
	}
	.dd-menu{
		padding:0;
		border:1px solid green;
		margin:0;
	}
	.dd-menu-item{
		padding:0;
		margin:0;
		list-style-type: none;
		background-color: white;
		height:30px;
		overflow:hidden;

		transition: 
			0.5s height cubic-bezier(.73,.32,.34,1.5),
			0.5s padding cubic-bezier(.73,.32,.34,1.5),
			0.5s margin cubic-bezier(.73,.32,.34,1.5),
			0.5s 0.2s color,
			0.2s background-color;

		.dd-menu-item{
			//padding:6px 0;
		}
	}
}

.dd:not(:hover) > .dd-menu > *{
	visibility: hidden;
	height:0;
}




// h2{margin: 0; font-size:16px;}

// li {
// 	list-style-type:none;
// }
// *{
// 	box-sizing: border-box;
// }

// $menu_WIDTH: 200px;

// .menu {
// 	display: block;
// 	position: relative;
// 	cursor: pointer;	

// 	.menu-title {
// 		display: block;
// 		width: $menu_WIDTH;
// 		height: 40px;
// 		padding: 12px 0 0;
// 		background: $vue_green;
// 		text-align: center;
// 		color: white;
// 		font-weight: bold;
// 		text-transform: uppercase;
// 		transition: 0.3s background-color;

// 		&:hover{
// 			background: darken($vue_green, 10%);
// 			&:before{
// 				border-top-color: darken($vue_green, 10%);
// 			}
// 		}

// 		//This is the 'arrow' part
// 		&:before{
// 			content: "";
// 			display: block;
// 			height: 0;
// 			border-top: 5px solid $vue_green;
// 			border-left: ($menu_WIDTH / 2) solid transparent;
// 			border-right: ($menu_WIDTH / 2) solid transparent;
// 			border-bottom: 0 solid #dddddd;
// 			position: absolute;
// 			top: 100%;
// 			left: 0;
// 			z-index: 101;
// 			transition:
// 				0.2s 0.2s border-top ease-out,
// 				0.3s border-top-color;
// 		}
// 	}
// }

// .menu-dropdown {
// 	min-width: 100%;
// 	padding: 15px 0;
// 	position: absolute;
// 	background: hsla(0, 0%, 92%, .98);
// 	border:1px solid $vue_green;
// 	font-weight:bold;

// 	z-index: 100;
// 	transition:
// 		0.5s padding,
// 		0.5s background,
// 		0.5s border;
// }

// .menu:not(:hover) > .menu-dropdown {
// 	padding: 0;
// 	background: #dddddd;
// 	border:none;
// 	z-index: 99;
// }

// .menu:not(:hover) > .menu-dropdown:after {
// 	border-top-color: #dddddd;
// }

// .menu:not(:hover) > .menu-title:after {
// 	border-bottom-color: #dddddd;
// }

// .menu-dropdown > * {
// 	overflow: hidden;
// 	height: 30px;
// 	padding: 5px 10px;
// 	background: rgba(0,0,0,0);
// 	white-space: nowrap;
// 	transition: 
// 		0.5s height cubic-bezier(.73,.32,.34,1.5),
// 		0.5s padding cubic-bezier(.73,.32,.34,1.5),
// 		0.5s margin cubic-bezier(.73,.32,.34,1.5),
// 		0.5s 0.2s color,
// 		0.2s background-color;
// }

// .menu-dropdown > li:hover {
// 	background: rgba(0,0,0,0.1);
// }

// .menu:not(:hover) > .menu-dropdown > * {
// 	visibility: hidden;
// 	height: 0;
// 	padding-top: 0;
// 	padding-bottom: 0;
// 	margin: 0;
// 	color: rgba(25,25,25,0);
// 	transition: 
// 		0.5s 0.1s height,
// 		0.5s 0.1s padding,
// 		0.5s 0.1s margin,
// 		0.3s color,
// 		0.6s visibility;
// 	z-index: 99;
// }
</style>
