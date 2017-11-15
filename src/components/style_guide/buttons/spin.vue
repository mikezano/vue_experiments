<template lang="pug">
	button.spin-btn
		icon(name="plus" scale="5")
</template>


<script>
	export default{
		name: 'spin_button'
	}
</script>

<style lang="scss" scoped>

.spin-btn{
	font-size:80px;
	$color:hsla(350, 50%, 30%, 100%);
	border:none;
	background:none;
	color:$color;
	transition: 
		transform .5s ease-out, 
		color .7s ease-out;
	transform-origin: 50% 50%;
	display:flex;
	align-items: center;
	justify-content: center;

	&:hover{
		color:lighten($color,10%);
		transform: rotate(360deg);
	}
}
</style>