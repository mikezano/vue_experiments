        <div class="cell">
            <button @click="toggleLeaveHooks">Leave Hooks</button>            
            <transition 
                name="fade"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                v-on:leave-cancelled="leaveCancelled">
                <div v-if="isLeaveHooks" class="emoji">🤡</div>
            </transition>
        </div>  

<template lang="pug">
    .cell
        button(@click="toggleLeaveHooks") Leave Hooks
        transition(
            name="fade"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled")
            .emoji(v-if="isLeavingHooks") 🤡
</template>


<script>
export default {
  data: () => {
      return {
          isLeavingHooks:true
      }
  },
  methods: {
        toggleLeaveHooks() {
            this.isLeavingHooks = !this.isLeavingHooks;
        },
        beforeLeave(){
            alert('beforeLeave');
        },
        leave(){
            alert('leave');
        },
        afterLeave(){
            alert('afterLeave');
        },
        leaveCancelled(){
            alert('leaveCancelled');
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
