<template lang="pug">
.container
	.cell
		.transition-container
			transition(name="zoom")
				div(v-if="isFading" class="emoji") 😪
		button(@click="toggleFading") Zoom
		pre &lt;div class=&#34{{appliedClass}}&#34&gt;
</template>


<script>
export default {
	name: 'zoom',
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

<style lang="scss" scoped>

$vue_green: hsla(153, 50%, 48%, 1);

.zoom-enter-active, .zoom-leave-active{
  transition: all 0.5s ease-out;
}

.zoom-enter, .zoom-leave-to{
	opacity:0;
}

.zoom-enter, .zoom-leave-to{
	transform: scale(.1);
}
</style>