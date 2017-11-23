<template lang="pug">
	.container
		vuer(name="Simple")
		vuer(name="Corner-Color")
		//vuer(v-for:items="item in items", :name="item.name")
</template>


<script>
import vuer from '@/components/vuer/vuer'

export default {
	name: 'index_cards',
	data () {
		return {}
	},
	mounted(){
		console.log(this.component);
	},
	components: {
		vuer
	},
	methods: {
		wat(e){

			const files = require.context('../../components/style_guide/buttons', false, /\.vue$/);
			//console.log(files);
			// const modules = {}
			files.keys().forEach((key) => {
				console.log(key);
			// if (key === './index.js') return
			// modules[ key.replace(/(\.\/|\.js)/g, '') ] = files(key).default
			});
			console.log(e.params.component);
		}
	},
	watch :{
		'$route': 'wat'
	},
	props: ['component']
}
</script>

<style lang="scss" scoped>
.container{
	display:flex;
	flex-direction:column;
	align-items: center;
}
</style>