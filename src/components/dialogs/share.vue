<template lang="pug">
  v-dialog(v-model="dialog2" width="400")
    v-card
      v-card-text.text-xs-center
        h1 Share!
        social-sharing(url="https://kitty-ipsum.firebaseapp.com" inline-template)
          div
            network(network="facebook")
              v-btn(block dark style="background-color:#3b5998") Facebook
            network(network="googleplus")
              v-btn(block dark style="background-color:#d34836") Google +
            network(network="twitter")
              v-btn(block dark style="background-color:#00aced") Twitter
            network(network="pinterest")
              v-btn(block dark style="background-color:rgb(189, 8, 28)") Pinterest
            network(network="linkedin")
              v-btn(block dark style="background-color:#0077b5") LinkedIn
            network(network="reddit")
              v-btn(block dark style="background-color:orangered") Reddit
            network(network="vk")
              v-btn(block dark style="background-color:#507299") VKontakte
            network(network="whatsapp")
              v-btn(block dark style="background-color:#1ebea5") Whatsapp
</template>


<script>
  export default {
    props: {
      dialog: Boolean
    },
    data() {
      return {
        dialog2: this.dialog,
        loading: false
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
