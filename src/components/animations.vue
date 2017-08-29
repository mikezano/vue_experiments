<template lang="pug">
	.container
		.dropdown
			label Select Animations
			ul
				li
					a(href="#/animationss/fade") Fade
				li
					a(href="#/animationss/zoom") Zoom


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
		  console.log(event.target.value);
		  this.$router.replace("animationss/"+event.target.value);
	  }
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
		border:4px solid $vue_green;
		padding:4px 0;
		display:block;
		background-color:white;
	}

	&:hover > ul{
		display:block;
		width:192px;
		list-style-type: none;
		margin:0;
		margin-top:-4px;
		padding:0;
		position:absolute;
		border:4px solid $vue_green;
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
/*
ul{
	position:absolute;
	list-style-type: none;
	padding:0;
	width:200px;
	margin:auto;

	label{
		border:4px solid $vue_green;
		background-color:white;
		padding:4px 0;
		display: block;
		width:200px;
		margin:auto;
	}

	ul{
	   display:none;
	  // width:200px;
	   
	   //margin-top:-4px;
	   //margin-left:auto;
	   //margin-right:auto;
	   border:4px solid $vue_green;
		li{
			background-color:white;
		}
	}
	li:hover > ul{

		//position: absolute;

		width:200px;
		padding:0;
		margin:0;
		margin-top:-4px;
		display:block;
	}
}*/
select{
	font-size:20px;
	border:4px solid $vue_green;
}
.cell{

	margin:auto;
	display:flex;
	flex-direction:column;
	align-items:center;
	transition: color .2s linear;
	height:500px;

	pre{
		font-size:30px;
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
		&:hover{
			box-shadow:4px 4px 8px gray;
			transform: scale(1.01);
		}
	}
}
</style>
