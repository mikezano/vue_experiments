<template lang="pug">
    .cell
        button(@click="toggleInOut") In Out
        transition(name="fade" mode="in-out")
            .emoji(v-if="isInOut" key="before" ) 🤑️
            .emoji(v-else key="after") ️️️️️️☹️

</template>


<script>
export default {
  data: () => {
      return {
          isInOut:true
      }
  },
  methods: {
      toggleInOut (){
          this.isInOut = !this.isInOut;
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