<template lang="pug">
	.container
		.dropdown
			label Select Example
				.caret &dArr;
			ul
				router-link(to="/style_guide/buttons" tag="li") Buttons
				router-link(to="/style_guide/cards" tag="li") Cards
				router-link(to="/style_guide/tabs" tag="li") Tabs
		transition(name="fade")
			router-view
</template>

<script>
export default {
  name: 'hello',
  data () {
	return {
	  msg: 'Zano'
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '../sass/global.scss';
.dropdown{
	margin:auto;
	width:200px;
	position:relative;
	z-index:100;
	label{
		border:2px solid $vue_green;
		padding:2px 0;
		display:block;
		background-color:white;

		.caret{
			float: right;
			font-weight:bold;
			transform: translateX(-10px);
		}
	}
	&:hover > ul{
		display:block;
		width:196px;
		list-style-type: none;
		margin:0;
		margin-top:-2px;
		padding:0;
		position:absolute;
		border:2px solid $vue_green;
		background-color: hsla(360, 100%, 100%, 0.9);

		li{
			margin:0;
			padding:4px 0;
			transition:all 0.2s linear;
			a{
				text-decoration:none;
				color:black;
				display:block;

			}
			&:hover{
				cursor:hover;
				background-color:lighten($vue_green, 40%);
			}
		}

	}
	ul{
		display:none;
	}
}
</style>
