<template lang="pug">
	.container
		.dropdown
			label Select Example
				.caret &dArr;
			ul
				li
					a(href="#/animations/fade") Fade
				li
					a(href="#/animations/fade_detailed") Fade Detailed
				li
					a(href="#/animations/zoom") Zoom
				li
					a(href="#/animations/template") Template
				li
					a(href="#/animations/timeline") Timeline
				li
					a(href="#/animations/examples_grid") Examples Grid
				li
					a(href="#/animations/simple_examples") Simple Examples


		router-view
</template>


<script>

export default {
  data: () => {
	  return {
		  isFading:true
	  }
  },
  methods: {
	  toggleFading (){
		  this.isFading = !this.isFading;
	  },
	  selectAnimation(event){
		  console.log(this.$router.map);
		  console.log(event.target.value);
		  this.$router.replace("animationss/"+event.target.value);
	  }
  },
	mounted: ()=>{
		//console.log(this.$router.map);
	}
}
</script>


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
		background-color:white;

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
