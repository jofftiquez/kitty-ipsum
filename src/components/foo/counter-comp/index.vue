<template lang="pug">
  v-btn(@click="count") {{name}} {{number}}
</template>

<script>
  export default {
    props: ['name', 'initialValue'],
    created() {
      if(this.initialValue) 
        this.number = this.initialValue;
    },
    data() {
      return {
        number: 0
      }
    },
    methods: {
      count() {
        this.number += 1;
      }
    }
  }
</script>
