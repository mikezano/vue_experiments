<template lang="pug">
.container
	.blue-card
		.blue-card__header 
			.blue-card__header__indicator  
			.blue-card__header__text Default
		.blue-card__content &lt; Content &gt;

	.red-card
		.red-card__header 
			.red-card__header__indicator  
			.red-card__header__text Danger
		.red-card__content &lt; Content &gt;

	.orange-card
		.orange-card__header 
			.orange-card__header__indicator  
			.orange-card__header__text Warning
		.orange-card__content &lt; Content &gt;

	.green-card
		.green-card__header 
			.green-card__header__indicator  
			.green-card__header__text Success
		.green-card__content &lt; Content &gt;
</template>


<script>
	export default{
		name: 'Corner-Color'
	}
</script>

<style lang="scss" scoped>
@mixin corner-card($color, $width){
	border:1px solid lighten($color,20%);
	transition: all .2s ease-out;
	background-color:white;
	width: $width;
	margin:10px;
	&:hover{box-shadow:2px 2px 4px gray;}
	&__header{
		&__indicator{
			position:absolute;
			margin-left:-1px;
			border-style: solid;
			border-width: 30px 30px 0 0;
			border-color: $color transparent transparent transparent;
		}
		&__text{
			text-align:center;
			font-weight:bold;
			line-height:30px;
		}
	}
	&__content{padding:4px;}
}

.blue-card{@include corner-card(#007bff, 200px);}
.red-card{@include corner-card(#CC0000, 100px);}
.orange-card{@include corner-card(#FF8800, 100%);}
.green-card{@include corner-card(#007E33, 250px);}
</style>