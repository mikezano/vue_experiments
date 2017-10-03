<template lang="pug">
	div
		transition(name="fade")
			div(v-if="isVisible" class="emoji") 😪
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

<style lang="scss" scoped>

.emoji{font-size:60px;}
.fade-enter-active, .fade-leave-active{
	transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-leave, .fade-enter-to{
	opacity:1;
}
</style>

<!--
<template lang="pug">
	<div>
		<button @click="toggleFading">Fade</button>
		<transition name="fade">
			<div v-if="isFading" class="emoji">😪</div>
		</transition>
	</div
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
		}
	}
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active{
	transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-leave, .fade-enter-to{
	opacity:1;
}
</style>
-->