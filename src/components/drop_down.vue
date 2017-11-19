<template lang="pug">
	.container
		ul.hList
			li
				a.menu(href="#click")
					h2.menu-title Components
					ul.menu-dropdown
						router-link(to="/style_guide/buttons" tag="li") Buttons
						router-link(to="/style_guide/cards" tag="li") Cards
						router-link(to="/style_guide/tabs" tag="li") Tabs

</template>

<script>
export default {name: 'Drop-Down'}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../sass/colors.scss';

@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

$vue_green: hsla(153, 50%, 48%, 1);

.container{
	display:flex;
	align-items:center;
	justify-content:center;
}


h2{margin: 0; font-size:16px;}

a {
	text-decoration: none;
	color: inherit;
}

li {
	list-style-type:none;
}
* {
	box-sizing: border-box;
}

$menu_WIDTH: 200px;

.menu {
	display: block;
	position: relative;
	cursor: pointer;	

	.menu-title {
		display: block;
		width: $menu_WIDTH;
		height: 40px;
		padding: 12px 0 0;
		background: $vue_green;
		text-align: center;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		transition: 0.3s background-color;

		&:hover{
			background: darken($vue_green, 10%);
			&:before{
				border-top-color: darken($vue_green, 10%);
			}
		}

		//This is the 'arrow' part
		&:before{
			content: "";
			display: block;
			height: 0;
			border-top: 5px solid $vue_green;
			border-left: ($menu_WIDTH / 2) solid transparent;
			border-right: ($menu_WIDTH / 2) solid transparent;
			border-bottom: 0 solid #dddddd;
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 101;
			transition:
				0.2s 0.2s border-top ease-out,
				0.3s border-top-color;
		}
	}
}

.menu-dropdown {
	min-width: 100%;
	padding: 15px 0;
	position: absolute;
	background: hsla(0, 0%, 92%, .95);
	border:1px solid $vue_green;

	z-index: 100;
	transition:
		0.5s padding,
		0.5s background,
		0.5s border;
}

.menu:not(:hover) > .menu-dropdown {
	padding: 0;
	background: #dddddd;
	border:none;
	z-index: 99;
}

.menu:not(:hover) > .menu-dropdown:after {
	border-top-color: #dddddd;
}

.menu:not(:hover) > .menu-title:after {
	border-bottom-color: #dddddd;
}

.menu-dropdown > * {
	overflow: hidden;
	height: 30px;
	padding: 5px 10px;
	background: rgba(0,0,0,0);
	white-space: nowrap;
	transition: 
		0.5s height cubic-bezier(.73,.32,.34,1.5),
		0.5s padding cubic-bezier(.73,.32,.34,1.5),
		0.5s margin cubic-bezier(.73,.32,.34,1.5),
		0.5s 0.2s color,
		0.2s background-color;
}

.menu-dropdown > li:hover {
	background: rgba(0,0,0,0.1);
}

.menu:not(:hover) > .menu-dropdown > * {
	visibility: hidden;
	height: 0;
	padding-top: 0;
	padding-bottom: 0;
	margin: 0;
	color: rgba(25,25,25,0);
	transition: 
		0.5s 0.1s height,
		0.5s 0.1s padding,
		0.5s 0.1s margin,
		0.3s color,
		0.6s visibility;
	z-index: 99;
}
</style>
