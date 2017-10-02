<template lang="pug">
    .cell
        button(@click="toggleSlide") Slide
        transition(name="slide")
            div(v-if="isSliding" class="emoji") 😡
</template>


<script>
export default {
  data: () => {
      return {
          isSliding:true
      }
  },
  methods: {
      toggleSlide (){
          this.isSliding = !this.isSliding;
      }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active{
  transition: all 0.5s ease-out;
}

.slide-enter, .slide-leave-to{
    opacity:0;
}

.slide-enter{
    transform: translateX(-20px);
}
.slide-leave-to{
    transform: translateX(20px);
}
</style>

