<template lang="pug">
	.container
		transition-group(name="fade")
			vuer(v-for="item in currentSet", :name="item" :key="item")
</template>


<script>
import vuer from '@/components/vuer/vuer'
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);
export default {
	name: 'index_cards',
	data () {
		return {
			hash: [],
			currentSet: null
		}
	},
	beforeMount(){
		this.buildRegistry();
		this.currentSet = this.hash[this.component];
	},
	components: {
		vuer
	},
	methods: {
		routeChanged(route){
			//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
			this.currentSet = this.hash[route.params.component];
			console.log(this.currentSet);

		},
		buildRegistry(){
			files.keys().forEach((key) => {
				let path = (key.replace(/(\.\/|\.vue)/g, ''));
				let folder = path.substr(0, path.indexOf('/'));
				let file = path.substr(path.indexOf('/')+1, path.length);

				if(!this.hash[folder])
					this.hash[folder] = [];
				this.hash[folder].push(file);
			});
		}
	},
	watch :{
		'$route': 'routeChanged'
	},
	props: ['component']
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
	transition-property: opacity;
	transition-duration: .25s;
}

.fade-enter-active {
	transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
	opacity: 0
}
.fade-move{
	transition: transform 10s;
}
.container{
	display:flex;
	flex-direction:column;
	align-items: center;
}
</style>