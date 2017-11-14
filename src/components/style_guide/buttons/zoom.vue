<template lang="pug">
	button.zoom Zoom
</template>


<script>
	export default{
		name: 'zoom_button'
	}
</script>

<style lang="scss" scoped>

.zoom{
	$shadow-color: black;
	box-shadow:2px 2px 4px $shadow-color;
	transition: all .2s ease-in-out;
	&:hover{
		transform: scale(1.1);
		box-shadow:4px 4px 8px lighten($shadow-color, 20%);
	}
}
</style>