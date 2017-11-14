<template lang="pug">
	.container
		h1 Buttons
		vuer(name="hello")
		vuer(name='spin_button')
		vuer(name="zoom")
</template>


<script>
import vuer from '@/components/vuer/vuer'
//import spin from '@/components/style_guide/buttons/spin'
import zoom from '@/components/style_guide/buttons/zoom'

export default {
	name: 'buttons_stuff',
	data () {
		return {}
	},
	components: {
		vuer,
		zoom
	}
}
</script>

<style lang="scss" scoped>
</style>