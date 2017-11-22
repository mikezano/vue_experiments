<template lang="pug">
	.container
		dropdownV2

		transition(name="fade")
			router-view
</template>

<script>

import vuer from '@/components/vuer/vuer'
import dropdown from '@/components/drop_down'
import dropdownV2 from '@/components/drop_down_v2'

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
		dropdownV2
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
}
</style>
