<template lang="pug">
	.container
		button.circle
			i.fa.fa-refresh
		button.circle
			i.fa.fa-bath
		button.circle
			i.fa.fa-blind
		button.circle
			i.fa.fa-truck
		button.circle-lg
			i.fa.fa-apple
</template>


<script>
	export default{
		name: 'Circle'
	}
</script>

<style lang="scss" scoped>

@mixin circle-button($color, $size){

	border:none;
	background-color:$color;
	color:black;
	width: $size;
	height: $size;
	margin: 4px;
	font-size: $size/2;
	border-radius: $size/2;
	box-shadow:2px 2px 4px hsla(0,0%,0%,1);
	transition: transform .1s ease-out, box-shadow .1s ease-out;
	&:hover{
		transform:scale(1.1);
		box-shadow:3px 3px 5px hsla(0,0%,0%,.5);
		background-color:lighten($color, 5%);
		cursor:pointer;
	}
}

.circle{@include circle-button(lightblue, 24px);}

.circle-lg{@include circle-button(pink, 48px);}
</style>