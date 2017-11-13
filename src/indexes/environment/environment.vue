<template>
	<div class="environment">
        <p>Test</p>


        <sky></sky>
    </div>
</template>

<script>

import sky from './sky.vue'


export default {
	components: {
		sky
	}
}
</script>

<style lang="scss">

.environment{
	width:400px;
	height:400px;
	position:absolute;
	overflow:hidden;
	margin:auto;
	top:200px;
	left:0;
	right:0;
}

</style>