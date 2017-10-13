<template>
    <div class="grid">
        <in_out></in_out>
        <out_in></out_in>
        <flip></flip>
    </div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'
import in_out from './examples/in_out'
import out_in from './examples/out_in'
import flip from './examples/flip'

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
        in_out,
        out_in,
        flip
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
