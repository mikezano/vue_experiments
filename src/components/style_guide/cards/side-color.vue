<template lang="pug">
.container
	.fruits.scard
		.scard__indicator 
			.scard__indicator__text Fruits
		.scard__content 
			dl
				dt 🍊:
				dd Tangerine
				dt 🍓:
				dd Strawberry
				dt 🍎:
				dd Apple
				dt 🍌:
				dd Banana
	.colors.scard
		.scard__indicator 
			.scard__indicator__text Colors
		.scard__content 
			dl
				dt.red RED:
				dd #CC0000
				dt.green GREEN:
				dd #007E33
				dt.orange ORANGE:
				dd #FF8800
				dt.blue BLUE:
				dd #007bff
</template>


<script>
	export default{
		name: "side-color"
	}
</script>

<style lang="scss" scoped>
@mixin side-card($color, $titleSize){
	$gray: hsla(0,0%,80%, 1);
	$el: scard;
	&.#{$el}{
		display:flex;
		border:1px solid $gray;
		margin:10px;
		background-color:white;
		.#{$el}__indicator{
			background-color: $color;
			width: $titleSize + ($titleSize/2px);
			overflow: hidden;
			text-overflow:ellipsis;
			
			&__text{
				color:white;
				font-weight:bold;
				font-size:$titleSize;
				margin-left:$titleSize + ($titleSize/8px);
				margin-top:10px;
				transform: rotate(90deg);
				transform-origin: 0 0;
			}
		}
		.#{$el}__content{
			width:100%;
			padding:8px;
			text-align:left;
		}
	}
}
.fruits{@include side-card(#007bff, 16px);}
.colors{@include side-card(#CC0000, 30px);}

.fruits, .colors{
	.red{color:#CC0000;}
	.blue{color:#007bff;}
	.orange{color:#FF8800;}
	.green{color:#007E33;}

	dl{display:flex; flex-wrap:wrap;}
	dt{font-weight:bold;width: 40%;}
	dd{color: black; width:60%; margin:0;}
}
</style>