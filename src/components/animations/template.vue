<template lang="pug">
	.container
		.cell
			.transition-container
				transition(:name="animationName")
					.emoji(v-if="isVisible") 😪
			button(@click="toggleVisible") {{animationName}}
			pre &lt;div class=&#34{{appliedClass}}&#34&gt;
  
</template>


<script>


import fade from './fade'

export default {
	data: () => {
		return {
			isVisible:true,
			animationName: 'fade',
			appliedClass:""
		}
	},
	methods: {
		toggleVisible (){
			this.isVisible = !this.isVisible;
			this.appliedClass = 
				this.isVisible ? "fading-active" : ""
		}
	},
	components:{
		fade
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