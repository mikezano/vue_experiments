<template lang="pug">
    .cell
        button(@click="toggleEnterHooks") Enter Hooks
        transition(
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled")
            .emoji(v-if="isEnteringHooks") 👽
</template>


<script>

import Velocity from 'velocity-animate';

export default {
  data: () => {
      return {
          isEnteringHooks:true
      }
  },
  methods: {
        toggleEnterHooks() {
            this.isEnteringHooks = !this.isEnteringHooks;
        },
        beforeEnter(){
           // alert('beforeEnter');
           
        },
        enter(el, done){
            //
            Velocity(el, {opacity: 1, fontSize: '10em'}, {duration:100});
            Velocity(el, { fontSize: '4em' }, { duration:100, complete: done });
        },
        afterEnter (el, done){
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration:500 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2, duration:500 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { duration:500, complete: done })
        },
        enterCancelled(){
            alert('enterCancelled');
        }
    }
}
</script>

<style lang="scss">

.animated-enter-active{
    animation:travel 1s linear;
}

.animated-leave-active{
    animation:fade-spin 1s linear;
}

@mixin xy($x, $y){
    transform: translateX($x) translateY($y);
}

@keyframes travel {
    0%  {   @include xy(0, 0); opacity:0;}
    20% {   @include xy(-50px, 0);}
    40% {   @include xy(-50px, -50px);}
    60% {   @include xy(50px, -50px);}
    80% {   @include xy(50px, 0);}
    100%{   @include xy(0, 0); opacity:1;}
}

@keyframes fade-spin {
    100%  {   
        transform: rotate(360deg) scale(4);
        opacity:0;
    }
}
</style>
