<template>
    <div class="grid">
        <fade></fade>
        <slide></slide>     
        <zoom></zoom>
        <in_out></in_out>                        
        <out_in></out_in>
        <flip></flip>   
        <animation></animation>                         
        <enter_hooks></enter_hooks>
        <leave_hooks></leave_hooks>                      
    </div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'
import fade from './effects_examples/fade'
import slide from './effects_examples/slide'
import zoom from './effects_examples/zoom'
import in_out from './effects_examples/in_out'
import out_in from './effects_examples/out_in'
import flip from './effects_examples/flip'
import animation from './effects_examples/animation'
import enter_hooks from './effects_examples/enter_hooks'
import leave_hooks from './effects_examples/leave_hooks'

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
        zoom,
        in_out,
        out_in,
        flip,
        animation,
        enter_hooks,
        leave_hooks
	}
}
</script>

<style lang="scss">

$vue_green: hsla(153, 50%, 48%, 1);

.grid{
	position:absolute;
	left:0; right:0; top:100px;
    width:500px;
    height:500px;
	margin:auto;
	display:grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows:  33.3% 33.3% 33.3%;
    grid-gap:10px;


    @import '../sass/global';

}

.fade-enter-active, .fade-leave-active{
    transition: opacity 5s ease-in;
}
.fade-enter, .fade-leave-to{
    opacity:0;
}

</style>


