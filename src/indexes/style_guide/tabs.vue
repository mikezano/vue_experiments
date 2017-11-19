<template lang="pug">
	.container
		| Tabs
</template>


<script>
import vuer from '@/components/vuer/vuer'

export default {
	name: 'index_tabs',
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