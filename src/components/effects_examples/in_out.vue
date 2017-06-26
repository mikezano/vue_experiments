<template lang="pug">
    .cell
        button(@click="toggleInOut") In Out
        transition(name="fade" mode="in-out")
            .emoji(v-if="isInOut" key="before" ) 🤑️
            .emoji(v-else key="after") ️️️️️️☹️

</template>


<script>
export default {
  data: () => {
      return {
          isInOut:true
      }
  },
  methods: {
      toggleInOut (){
          this.isInOut = !this.isInOut;
      }
  }
}
</script>

