<template lang="pug">
.simple-card
	.simple-card__header Header
		button.circle
			icon(name="truck" scale="1")
		button.circle
			icon(name="refresh" scale="1")
	.simple-card__content All your content goes here
</template>


<script>
	export default{
		name: "simple"
	}
</script>

<style lang="scss" scoped>

.simple-card{
	$color:darkgray;
	border:1px solid darken($color, 20%);
	transition: all .2s ease-out;
	width:100%;
	margin:10px;
	&:hover{
		box-shadow:2px 2px 4px black;
	}
	&__header{
		background-color:darkgray;
		padding:10px;
	}
	&__content{
		background-color:white;
		color:black;
		padding:10px;
	}


	.circle{
		//@include circle-button(lightblue, 24px);
		float:right;
		margin-top:16px;
	}
}
</style>