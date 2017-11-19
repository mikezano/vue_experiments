<template lang="pug">
	.container
		vuer(name="Circle")
		vuer(name="Spin")
		vuer(name="Zoom")
		vuer(name="Drop-Down")
</template>


<script>
import vuer from '@/components/vuer/vuer'

export default {
	name: 'buttons_stuff',
	data () {
		return {}
	},
	components: {
		vuer
	}
}
</script>

<style lang="scss" scoped>
.container{
	display:flex;
	flex-direction:column;
	//justify-content: center;
	align-items: center;
}
</style>