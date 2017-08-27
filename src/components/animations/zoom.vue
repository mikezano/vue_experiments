<template lang="pug">
    h1 Zoom
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