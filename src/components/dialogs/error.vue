<template lang="pug">
  v-dialog(v-model="dialog2" width="400")
    v-card(style="border-radius: 10px;")
      v-card-text.text-xs-center
        h1 Oops!
        br
        p {{errorMessage}}
        v-btn(large round color="primary" @click="dialog2 = false") 
          strong Meow!
    
</template>

<script>
  export default {
    props: {
      dialog: Boolean,
      errorMessage: ''
    },
    data() {
      return {
        dialog2: this.dialog,
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
