<template lang="pug">

	transition-group.container(name="list" tag="div" v-on:after-leave="afterLeave")
		.list-item(v-for="item in currentSet", :key="item")
			vuer(:name="item")
</template>


<script>
import vuer from '@/components/vuer/vuer'
//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'index_cards',
	props: ['component'],
	data () {
		return {
			hash: [],
			currentSet: null,
			nextRoute: null
		}
	},
	beforeMount(){
		this.buildRegistry();
	},
	mounted(){
		this.currentSet = this.hash[this.component];
	},
	methods: {
		routeChanged(route){
			this.currentSet = this.hash[route.params.component];
		},
		buildRegistry(){
			//Loading file names from a folder
			files.keys().forEach((key) => {
				let path = (key.replace(/(\.\/|\.vue)/g, ''));
				let folder = path.substr(0, path.indexOf('/'));
				let file = path.substr(path.indexOf('/')+1, path.length);

				if(!this.hash[folder])
					this.hash[folder] = [];
				this.hash[folder].push(file);
			});
		},
		afterLeave(e){
			//this.currentSet = this.nextRoute;

		}
	},
	watch :{
		'$route': 'routeChanged'
	},
	components: {
		vuer
	}
}
</script>

<style lang="scss" scoped>

.list-item {
  display: inline-block;
}
.list-enter-active, .list-leave-active {
  transition: all .3s;
}
.list-leave-active{
	position:absolute;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
 
}
.list-enter{
	transform: translateX(-30px);
}
.list-leave-to{
	transform: translateX(30px);
}
.list-move{
	transition: transform 1s;
}
.list-enter-to, .list-leave{
	opacity:1;
}
.container{
	display:flex;
	flex-direction:column;
	align-items: center;
}
</style>