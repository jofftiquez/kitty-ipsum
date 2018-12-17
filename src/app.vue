<template lang="pug">
  v-app#app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Varela Round', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  h1 {
    font-family: 'Pacifico', cursive;
  }
</style>
