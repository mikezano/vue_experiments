<template>
    <div class="grid">
        <enter_hooks></enter_hooks>
        <leave_hooks></leave_hooks>
    </div>
</template>

<script>

import 'vue-awesome/icons/close'
import icon from 'vue-awesome/components/Icon'
import enter_hooks from './examples/enter_hooks'
import leave_hooks from './examples/leave_hooks'

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
        enter_hooks,
        leave_hooks
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
