<template lang="pug">
  v-dialog(v-model="dialog2" width="700")
    v-card(style="border-radius: 10px;")
      v-card-text.text-xs-center
        h1 Result!
        v-textarea(
          v-model="result"
          outline
          readonly
          height="300"
          onclick="this.focus();this.select()"
        )
        v-btn(large round color="primary" @click="copy") Copy
    
</template>

<script>
  export default {
    props: {
      dialog: Boolean,
      result: ''
    },
    data() {
      return {
        dialog2: this.dialog,
      }
    },
    methods: {
      copy() {
        this.dialog2 = false;
      }
    },
    watch: {
      dialog(val) {
        this.dialog2 = val;
      },
      dialog2(val) {
        if (!val) {
          this.$emit('close', false);
        } 
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #2c3e50 !important;
  }
</style>
