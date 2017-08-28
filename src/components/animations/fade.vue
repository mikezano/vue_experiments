<template lang="pug">
	.container
		router-link(:to="{path: 'fade'}") Fade
		router-link(:to="{path: 'zoom'}") Zoom
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

.fade-enter-active, .fade-leave-active{
    transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to{
    opacity:0;
}
</style>