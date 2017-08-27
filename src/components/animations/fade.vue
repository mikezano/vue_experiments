<template lang="pug">
	.container

		.cell
			.transition-container
				transition(name="fade")
					div(v-if="isFading" class="emoji") 😪
			button(@click="toggleFading") Fade
			pre &lt;div class=&#34{{appliedClass}}&#34&gt;
  
</template>


<script>
export default {
  data: () => {
      return {
          isFading:true,
		  appliedClass:""
      }
  },
  methods: {
      toggleFading (){
          this.isFading = !this.isFading;

		  this.appliedClass = 
		  	this.isFading ? "fading-active" : ""
      }
  }
}
</script>

<style lang="scss">

$vue_green: hsla(153, 50%, 48%, 1);
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
			transform: scale(1.05);
		}
	}
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to{
    opacity:0;
}
</style>