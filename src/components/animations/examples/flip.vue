<template lang="pug">
    .cell
        button(@click="toggleFlip") Flip
        transition(name="flip" mode="out-in")
            .emoji(v-if="isFlipping" key="before" ) 😀
            .emoji(v-else key="after") ️️️️️️🙃

</template>


<script>
export default {
  data: () => {
      return {
          isFlipping:true
      }
  },
  methods: {
      toggleFlip (){
          this.isFlipping = !this.isFlipping;
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/global.scss';

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

</style>
