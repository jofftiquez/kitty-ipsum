<template lang="pug">
  v-container
    v-layout(row)
      v-flex.text-xs-center
        h1 foo
        counter-button(:initialValue="10" :name="buttonName")
        counter-button(:initialValue="2" :name="buttonName")
        counter-button(:initialValue="3" :name="buttonName")
        counter-button(:initialValue="6" :name="buttonName")
</template>

<script>
  import counterButton from '@/components/foo/counter-comp';
  export default {
    components: {
      counterButton
    },
    created() {
      const { button } = this.$route.query;
      if(button) this.buttonName = button;
    },
    data() {
      return {
        buttonName: ''
      }
    }
  }
</script>