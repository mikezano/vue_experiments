<template lang="pug">
	.container
		.grid-container
			.cell.a Header
			.cell.b Side Bar
			.cell.c 
				p
					| Sed luctus magna sem, a pharetra lacus tempus vitae.
					| Sed mollis fermentum libero eu ornare. Quisque ut sollicitudin
					| magna. Maecenas a felis et metus molestie gravida a nec nunc. Maecenas
</template>


<script>
	export default{
		name: "left_column"
	}
</script>

<style lang="scss" scoped>

.container{
	width:100%;
	margin:20px;
}
.grid-container{
	display:grid;
	grid-template-columns: 30% 70%;
	grid-gap:2px;
	.cell{
		height:50px; 
		color:white;
		border:1px solid lightgrey;
		text-align:center;
		background-color: hsla(153, 50%, 48%, 1);
		&.a{
			grid-column:1/3;
		}
		&.b, &.c{
			height:100%;
		}
	}
}
</style>