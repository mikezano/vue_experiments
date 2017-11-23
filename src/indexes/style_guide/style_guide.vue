<template lang="pug">
	.container

		drop_down(v-bind:items="routes.style_guide()")
		transition(name="fade")
			router-view
</template>

<script>

import vuer from '@/components/vuer/vuer'
import drop_down from '@/components/drop_down'
import routes from '@/models/routes'

export default {
	name: 'style_guide_index',
	data () {
		return {
			msg: 'Zano',
			routes: routes
		}
	},
	components:{
		vuer,
		drop_down
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container{
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
	h1{
		width:600px;
	}
}
</style>
