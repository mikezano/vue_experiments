<template lang="pug">
	.container
		dropdown

		transition(name="fade")
			router-view
</template>

<script>

import vuer from '@/components/vuer/vuer'
import dropdown from '@/components/drop_down'

export default {
	name: 'style_guide_index',
	data () {
		return {
			msg: 'Zano',

		}	
	},
	mounted(){

	},
	methods:{
		getFile (method, url, done) {
			var xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.onload = function () {
				done(xhr.response);
			};
			xhr.send();
		}
	},
	components:{
		vuer,
		dropdown
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
