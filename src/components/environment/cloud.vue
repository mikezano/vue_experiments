<template>
	<div class="cloud">
	</div>
</template>

<script>

export default {
	data () {
		return {
			x: 0,
			y: 0,
		}
	},
	methods: {
		randomizePos () {
			this.x = Math.floor(Math.random()*200);
			this.y = Math.floor(Math.random()*200);
		}
	},
	mounted () {
		
		this.randomizePos();
	
		this.$el.style.left = (-1 * this.x) + "px";
		this.$el.style.top = this.y + "px";
		this.$el.style.width = this.x/2 + "px";
		this.$el.style.height = this.x/2 + "px";
		this.$el.style.borderRadius = this.x/4 + "px";
		this.$el.style.animationDuration = this.x/10 + "s";
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cloud{
	width:20px;
	height:20px;
	border-radius:10px;
	background:linear-gradient(whitesmoke, gray);
	position:absolute;
	animation: move linear infinite;
}
@keyframes move{
	100%{
		left:400px;
	}
}
</style>


