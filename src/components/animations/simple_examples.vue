<template>
    <div class="grid">
        <fade></fade>
        <slide></slide>
        <zoom></zoom>
    </div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'
import fade from './examples/fade'
import slide from './examples/slide'
import zoom from './examples/zoom'

export default {
    data: () => {
        return {
            isEnterHooks: true,
            isLeaveHooks: true
        }
    },
	methods: {
	},
  components:{
		icon,
        fade,
        slide,
        zoom
	}
}
</script>

<style lang="scss" scoped>

@import '../../sass/global';


.grid{
	position:absolute;
	left:0; right:0; top:100px;
    width:500px;
    height:500px;
	margin:auto;
	display:grid;
	//grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows:  33.3% 33.3% 33.3%;
    grid-gap:10px;
    

}

</style>


