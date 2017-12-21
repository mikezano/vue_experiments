<template lang="pug">
	.container
		h1 Looking for interesting components to use in your app?

		a( @click="collectMixins()") Download style_guide.scss
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'style_guide_index_home',
	data(){
		return {
			names: ['circle', 'spin'],
			mixinRE: new RegExp("@mixin.*?end", "s"),
			allMixins: ""
		}
	},
	methods: {
		collectMixins(){
			this.allMixins = "";
			this.names.forEach(n => {
				let component = this.getComponent(n);
				let source = component.source.replace(/\t/g,'  ');
				this.allMixins += source.match(this.mixinRE) + "\n\n\r";
			});
			console.log(this.allMixins);
			this.download();
		},
		download(){
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.allMixins));
			element.setAttribute('download', 'mixins.txt');

			element.style.display = 'none';
			document.body.appendChild(element);

			element.click();

			document.body.removeChild(element);
		},
		test(){
			return "data:text/plain;charset=utf-8,"+ encodeURIComponent(this.allMixins);
		}
	},
	computed: {
		...mapGetters(['getComponent'])
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.container{width:600px;}
</style>
