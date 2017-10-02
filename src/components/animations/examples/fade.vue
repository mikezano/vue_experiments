<template lang="pug">
    .cell
        button(@click="toggleFading") Fade
        transition(name="fade")
            div(v-if="isFading" class="emoji") 😪
</template>


<script>
export default {
  data: () => {
      return {
          isFading:true
      }
  },
  methods: {
      toggleFading (){
          this.isFading = !this.isFading;
      }
  }
}
</script>

<style lang="scss" >
@import '../../../sass/fade.scss';
</style>
