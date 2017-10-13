<template lang="pug">
    .cell
        button(@click="toggleOutIn") Out In
        transition(name="fade" mode="out-in")
            .emoji(v-if="isOutIn" key="before" ) 🤑️
            .emoji(v-else key="after") ️️️️️️☹️

</template>


<script>
export default {
  data: () => {
      return {
          isOutIn:true
      }
  },
  methods: {
      toggleOutIn (){
          this.isOutIn = !this.isOutIn;
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/global.scss';

.fade-enter-active, .fade-leave-active{
	transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to{
	opacity:0;
}
.fade-leave, .fade-enter-to{
	opacity:1;
}
</style>