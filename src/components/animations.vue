<template lang="pug">
	.container
		.dropdown
			label Select Example
				.caret &dArr;
			ul
				li
					a(href="#/animationss/fade") Fade
				li
					a(href="#/animationss/fade_detailed") Fade Detailed
				li
					a(href="#/animationss/zoom") Zoom
				li
					a(href="#/animationss/template") Template
				li
					a(href="#/animationss/timeline") Timeline


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


<style lang="scss">
$vue_green: hsla(153, 50%, 48%, 1);

.dropdown{
	margin:auto;
	width:200px;
	position:relative;
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


.cell{

	margin:auto;
	display:flex;
	flex-direction:column;
	align-items:center;
	transition: color .2s linear;
	height:500px;

	pre{
		font-size:20px;
	}
	.transition-container{
		height:140px;
		.emoji{
			font-size:100px;
		}
	}

	button {
		font-weight:bold;
		font-size:40px;
		border-radius:5px;
		color:darken($vue_green, 30%);
		border:4px solid darken($vue_green, 20%);
		background:radial-gradient(lighten($vue_green, 10%), $vue_green);
		transition: box-shadow 0.1s linear, transform 0.1s linear;
		outline:none;
		&:hover{
			box-shadow:4px 4px 8px gray;
			transform: scale(1.01);
		}
		&:active{
			transform: scale(1.0);
		}
	}
}
</style>
