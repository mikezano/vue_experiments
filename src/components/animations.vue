<template lang="pug">
    .container
        h1 Animation Examples
        select(@change="selectAnimation($event)")
            option(selected) Select Animation
            option fade
            option zoom
        router-view
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
      },
      selectAnimation(event){
          console.log(event.target.value);
          this.$router.push(event.target.value);
      }
  }
}
</script>


<style lang="scss" scoped>
$vue_green: hsla(153, 50%, 48%, 1);

select{
    font-size:20px;
    border:4px solid $vue_green;
}
</style>
