<template>
	<div>
		<button @click="showSource">Source</button>
		<button @click="showLive">Live</button>
		<div v-if="showcode">
			Look ma, the source
			<pre>{{getcomponent(name).source}}</pre>
		</div>
		<div v-if="!showcode">
			Look ma, the component
			<component :is="getcomponent(name)"></component>
		</div>
	</div>
</template>

<script>
import DocsRegistry from './registry'

export default {
	name: 'viewer',
	data () {
		return {
			showcode: false,
			code: '',
		}
	},
	methods: {
		getcomponent(n){
			return DocsRegistry.get(n);
		},
		showSource(){
			this.code = this.getcomponent("animated_bg").source;
			this.showcode = true;
		},
		showLive(){
			this.showcode = false;
		}
	},
	components: {},
	props: ['name']
}
</script>

<style lang="scss" scoped>
pre{
	background-color: #555;
	color: white;
	text-align:left;
	width:400px;
}
</style>
