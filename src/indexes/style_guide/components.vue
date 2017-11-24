<template lang="pug">
	.container
		transition-group(name="list" tag="div" v-on:after-leave="afterLeave")
			.list-item(v-for="item in currentSet", :key="item")
				vuer(:name="item")
</template>


<script>
import vuer from '@/components/vuer/vuer'
const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

export default {
	name: 'index_cards',
	data () {
		return {
			hash: [],
			currentSet: null,
			listLength: 0,
			nextRoute: null
		}
	},
	beforeMount(){
		this.buildRegistry();
		this.currentSet = this.hash[this.component];
		this.listLength = this.currentSet.length;
	},
	components: {
		vuer
	},
	methods: {
		routeChanged(route){
			//https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
			this.currentSet = this.hash[route.params.component];
			//this.nextRoute = this.hash[route.params.component];
			//this.currentSet = [];
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
		},
		afterLeave(e){
			//this.currentSet = this.nextRoute;

		}
	},
	watch :{
		'$route': 'routeChanged'
	},
	props: ['component']
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