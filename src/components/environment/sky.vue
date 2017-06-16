<template>
	<div>
		<button @click="addCloud">Add Cloud</button>
		<div class="sky">

			<cloud v-for="c in cloudCollection" :key="c.id"></cloud>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import cloud from './cloud.vue'

export default {
	data () {
		return {
			x: 0,
			cloudCollection: []
		}
	},
	methods: {
		addCloud () {
			this.cloudCollection.push(Vue.component('1',cloud));
			//this.cloudCollection.push(new Vue({}))
		}
	},
	mounted () {

	},
	components: {
		cloud
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.sky{
	width:300px;
	height:300px;
	background: linear-gradient(#0071c5, lightblue);
	border:4px solid lightcyan;
	box-shadow: 2px 2px 8px hsl(0, 0%, 60%);
	border-radius: 5px;
	position:absolute;
	overflow:hidden;
	margin:auto;
	//top:200px;
	left:0;
	right:0;

}
</style>


