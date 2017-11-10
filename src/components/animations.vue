<template lang="pug">
	.container
		.dropdown
			label Select Example
				.caret &dArr;
			ul
				router-link(to="/animations/fade" tag="li") Fade
				router-link(to="/animations/fade_detailed" tag="li") Fade Detailed
				router-link(to="/animations/zoom" tag="li") Zoom
				router-link(to="/animations/template" tag="li") Template
				router-link(to="/animations/timeline" tag="li") Timeline
				router-link(to="/animations/examples_grid" tag="li") Examples Grid
				router-link(to="/animations/simple_examples" tag="li") Simple Examples
				router-link(to="/animations/in_out_examples" tag="li") In & Outs Example
				router-link(to="/animations/hooks_examples" tag="li") Hooks Examples

		transition(name="fade")
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

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
