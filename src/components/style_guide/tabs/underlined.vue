<template lang="pug">
.container
	.blue.card
		.card__header 
			.card__header__indicator  
			.card__header__text Default
		.card__content &lt; Praesent massa libero, consectetur nec purus vitaet &gt;

	.red.card
		.card__header 
			.card__header__indicator  
			.card__header__text Default
		.card__content &lt; Praesent massa libero, consectetur nec purus vitaet &gt;

	.green.card
		.card__header 
			.card__header__indicator  
			.card__header__text Default
		.card__content &lt; Praesent massa libero, consectetur nec purus vitaet &gt;

	.orange.card
		.card__header 
			.card__header__indicator  
			.card__header__text Default
		.card__content &lt; Praesent massa libero, consectetur nec purus vitaet &gt;

</template>


<script>
	export default{
		name: 'Corner-Color'
	}
</script>

<style lang="scss" scoped>
@mixin corner-card($color, $width){
	$el: card;
	&.#{$el}{
		border:1px solid lighten($color,20%);
		transition: all .2s ease-out;
		background-color:white;
		width: $width;
		margin:4px;
		&:hover{box-shadow:2px 2px 4px gray;}
		.#{$el}__header{
			&__indicator{
				position:absolute;
				margin-left:-1px;
				margin-top:-1px;
				border-style: solid;
				border-width: 30px 30px 0 0;
				border-color: 
					$color
					transparent
					transparent
					transparent;
			}
			&__text{
				text-align:center;
				font-weight:bold;
				line-height:30px;
			}
		}
		#{$el}__content{padding:4px;}
	}
}
.blue{@include corner-card(#007bff, 200px);}
.red{@include corner-card(#CC0000, 100px);}
.green{@include corner-card(#FF8800, 90%);}
.orange{@include corner-card(#007E33, 250px);}
</style>