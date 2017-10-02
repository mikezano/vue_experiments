<template lang="pug">
	.container
		.cell
			.transition-container
				transition(name="fade")
					.emoji(v-if="isVisible") 😪
				
			button(@click="toggleFading") Fade 
</template>

<script>
export default {
	data: () => {
		return {
			isVisible:true
		}
	},
	methods: {
		toggleFading (){
			this.isVisible = !this.isVisible;
		}
	}
}
</script>

<style lang="scss">

$vue_green: hsla(153, 50%, 48%, 1);


</style>