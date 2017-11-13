<template>
	<div id="app">
		<div>{{tripleCounter}}</div>
		<button @click="increment(2)">+</button>
		<button @click="decrement()">-</button>
		<button @click="asyncDecrement()">Async</button>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	name: 'app',
	data () {
		return {
			msg: 'Hello World'
		}
	},
	computed: {
		tripleCounter() {
			return this.$store.getters.tripleCounter;
		}
	},
	methods: {
		...mapMutations(['decrement','increment']),
		asyncDecrement () {
			this.$store.dispatch('asyncDecrement', {by: 1, duration: 3000})
				.then(() =>{
					alert('decrement!');
				})
		}
	}
}
</script>
