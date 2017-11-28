<template lang="pug">
.container

	.alphabet.scard
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

.red{color:#CC0000;}
.blue{color:#007bff;}
.orange{color:#FF8800;}
.green{color:#007E33;}

@mixin side-card($color, $width, $sizing){
	$gray: hsla(0,0%,80%, 1);
	$el: scard;
	&.#{$el}{
		display:flex;
		border:1px solid $gray;
		margin:10px;
		background-color:white;
		.#{$el}__indicator{
			background-color: $color;
			width: $sizing + ($sizing/2px);
			overflow: hidden;
			text-overflow:ellipsis;
			
			&__text{
				color:white;
				font-weight:bold;
				font-size:$sizing;
				margin-left:$sizing + ($sizing/8px);
				margin-top:10px;
				transform: rotate(90deg);
				transform-origin: 0 0;
			}
		}
		.#{$el}__content{
			width:100%;
			padding:8px 10px;
			font-size:14px;
			text-align:left;
				 dl{display:flex; flex-wrap:wrap;}
				 dt{
					font-weight:bold;
					width: 30%;
				}
				dd{color: black; width:50%; margin:0;}
		}
	}
}
.alphabet{@include side-card(#007bff, 250px, 16px);}
.colors{@include side-card(#CC0000, 250px, 24px);}
</style>