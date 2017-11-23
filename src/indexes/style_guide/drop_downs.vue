<template lang="pug">
	.container
		vuer(name="Simple")
		vuer(name="Corner-Color")
</template>


<script>
import vuer from '@/components/vuer/vuer'

export default {
	name: 'index_cards',
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
	align-items: center;
}
</style>