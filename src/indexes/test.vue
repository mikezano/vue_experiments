<template lang="pug">
	.container
		button(@click="add") Add
		button(@click="remove") Remove
		button(@click="shuffle") Shuffle
		transition-group(name="list" tag="p")
			span.list-item(v-for="item in items" v-bind:key="item")
				| {{item}}
</template>

<script>

export default {
	name: 'test',
	data () {
		return{
			items:[1,2,3,4,5,6,7,8,9],
			nextNum:10
		}
	},
	methods:{
		randomIndex(){
			return Math.floor(Math.random() * this.items.length)
		},
		add(){
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove(){
			this.items.splice(this.randomIndex(), 1)
		},
		shuffle() {
			this.items = this._.shuffle(this.items)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../sass/colors.scss';

.container{
	display:flex;
	align-items:center;
	justify-content:center;
}

.list-item {
	transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 10s;
}
.list-leave-active{
	position:absolute;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-move{
	transition: transform 1s;
}

</style>
