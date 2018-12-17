<template lang="pug">
  v-dialog(v-model="dialog2" width="400" persistent)
    v-card(style="border-radius: 10px;")
      v-card-text.text-xs-center
        h1 Are you a cat?
        v-checkbox(
          v-model="isCat"
          label="Meow!"
          color="primary"
        )
        v-btn(@click="proceed" large round color="primary" v-if="isCat") Proceed
    
</template>

<script>
  export default {
    props: {
      dialog: Boolean
    },
    data() {
      return {
        dialog2: this.dialog,
        loading: false,
        isCat: false
      }
    },
    methods: {
      proceed() {
        localStorage.setItem('isCat', 'yes');
        this.$emit('isCat', true);
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
      },
      isCat(val) {
        if(val) this.showWelcome = true;
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #2c3e50 !important;
  }
</style>
