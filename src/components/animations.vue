<template lang="pug">
    h1 Fade
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
