<script>
import Card from './partials/Card.vue';
import cards from '../data/cards';

export default {
  name: 'Main',
  data(){
    return {
      cards,
      text: 'Clicca le immagini per scoprire la storia dell\'eroina dei due mondi!'
    }
  },
  components: {
    Card
  },

}
</script>

<template>

  <div class="container p-2">
    
    <p class="py-4">{{ this.text }}</p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
     
      <Card v-for="(item, index) in cards" :key="`card${index}`" :cardObj="item"/>
    

    </div>
  </div>
  
</template>

<style lang="scss" scoped>

p {
  font-size: 1.5rem;
}

</style>