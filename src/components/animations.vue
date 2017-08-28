<template lang="pug">
    .container
        h1 Animation Examples
        select
            option(selected) Select Animation
            option
                router-link(:to="{path: '/fade'}") Fade
            option
                router-link(:to="{path: 'zoom'}") Zoom
        router-link(:to="{path: 'fade'}") Fade
        router-link(:to="{path: 'animationss/zoom'}") Zoom
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
          this.$router.push(event.target.value);
      }
  }
}
</script>


<style lang="scss">
$vue_green: hsla(153, 50%, 48%, 1);

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
			transform: scale(1.05);
		}
	}
}
</style>
