<template lang="pug">
    .cell
        button(@click="toggleZoom") Zoom
        transition(name="zoom")
            div(v-if="isZooming" class="emoji") 😲
</template>


<script>
export default {
  data: () => {
      return {
          isZooming:true
      }
  },
  methods: {
      toggleZoom (){
          this.isZooming = !this.isZooming;
      }
  }
}
</script>

<style lang="scss">
.zoom-enter-active, .zoom-leave-active{
  transition: all 0.5s ease-out;
}

.zoom-enter, .zoom-leave-to{
    opacity:0;
}

.zoom-enter, .zoom-leave-to{
    transform: scale(.1);
}
</style>

