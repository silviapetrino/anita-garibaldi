
<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';



  export default {
    name: 'Main-app',
    
    components: {
      Header,
      Main
    },

  }
</script>

<template>

  <Header />
  <Main />
  
</template>


<style lang="scss">

@use '../src/scss/main.scss' as *;

</style>