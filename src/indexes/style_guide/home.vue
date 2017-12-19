<template lang="pug">
	.container
		h1 Looking for interesting components to use in your app?

		a( @click="collectMixins()") Download style_guide.scss
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'style_guide_index_home',
	methods: {
		collectMixins(){
			let components = this.getComponents();
			components.forEach(element => {
				console.log(element)
			});
		}
	},
	computed: {
		...mapGetters(['getComponents'])
	},	

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.container{width:600px;}
</style>
