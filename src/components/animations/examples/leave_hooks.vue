<template lang="pug">
	.cell
		button(@click="toggleLeaveHooks") Leave Hooks
		transition(
			name="fade"
			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
			v-on:after-leave="afterLeave"
			v-on:leave-cancelled="leaveCancelled")
			.emoji(v-if="isLeavingHooks") 🙈
</template>


<script>
export default {
	data: () => {
		return {
			isLeavingHooks:true
		}
	},
	methods: {
		toggleLeaveHooks() {
			this.isLeavingHooks = !this.isLeavingHooks;
		},
		beforeLeave(){
			alert('beforeLeave');
		},
		leave(){
			alert('leave');
		},
		afterLeave(){
			alert('afterLeave');
		},
		leaveCancelled(){
			alert('leaveCancelled');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../sass/fade.scss';
</style>