<template lang="pug">
    .cell
        button(@click="toggleOutIn") Out In
        transition(name="fade" mode="out-in")
            .emoji(v-if="isOutIn" key="before" ) 🤑️
            .emoji(v-else key="after") ️️️️️️☹️

</template>


<script>
export default {
  data: () => {
      return {
          isOutIn:true
      }
  },
  methods: {
      toggleOutIn (){
          this.isOutIn = !this.isOutIn;
      }
  }
}
</script>
