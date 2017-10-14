<template lang="pug">
    .cell
        button(@click="toggleAnimation") Animation
        transition(name="animated")
            .emoji(v-if="isAnimating") 😰
</template>


<script>
export default {
  data: () => {
      return {
          isAnimating:true
      }
  },
  methods: {
      toggleAnimation (){
          this.isAnimating = !this.isAnimating;
      }
  }
}
</script>

<style lang="scss">

.animated-enter-active{
    animation:travel 4s ease-in;
}

.animated-leave-active{
    animation:fade-spin 2s linear;
}

@mixin xy($x, $y){
    transform: translateX($x) translateY($y);
}

@keyframes travel {
    0%  {   @include xy(0, 0); opacity:0;}
    20% {   @include xy(-50px, 0);}
    30% {   @include xy(-50px, 50px); opacity:1;}
    40% {   @include xy(-60px, -50px);}
    50% {   @include xy(60px, -50px);}
    60% {   @include xy(50px, -80px);}
    80% {   @include xy(30px, 0);}
    90% {   @include xy(-80px, 0);}
    100%{   @include xy(0, 0); }
}

@keyframes fade-spin {
    100%  {   
        transform: rotate(360deg) scale(4);
        opacity:0;
    }
}
</style>
