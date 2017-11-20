<template lang="pug">
	.container
		//button.rollover
			.rollover__container
				.rollover__main OK
				.rollover__sub 
					icon(name="thumbs-up")

		button.bad.rollover
			.rollover__container
				.rollover__main OK
				.rollover__sub 
					icon(name="thumbs-down")
</template>

<script>
	export default {name: "Rollover"}
</script>

<style lang="scss" scoped>

@import '../../../sass/colors.scss';

@mixin rollover($size, $color){
	
	width: 2 * $size;
	height:$size;
	overflow:hidden;
	padding:0;
	border:1px solid darken($color, 10%);
	color:white;

	&:hover{
		.rollover__container{
			margin-top: -1 * $size;
			cursor:pointer;
		}
	}
	&__container{
		background-color:$color;
		transition: all .5s ease-in-out;
	}
	&__main{
		height:$size;
		line-height:$size;
		font-size: $size/2;
	}
	&__sub{
		height:$size;
		line-height:$size;		
		font-size: $size/3;
	}
	
}
//.rollover{ @include rollover(50px, $vue_green);}
.rollover{ @include rollover(100px, $vue_green);}
</style>