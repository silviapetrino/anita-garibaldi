<script>


export default {
  name: 'Header',
  data(){
    return {
      text : 'E tu cosa sai di Anita?'
    }
  }

}

</script>

<template>

<header class="bg-red text-white py-5rem debug">
  <div class="container d-flex justify-content-between">
    
    <h1>{{ this.text }}</h1>
    <a href="#" class="image cursor col-3">
      <img src="/Anita_Garibaldi_-_1839.jpg" alt="anita-garibaldi-ritratto" class="img-fluid w-100 h-100 object-fit-cover">
    </a>
  </div>
</header>


</template>


<style lang="scss" scoped>

@use '../../src/scss/main.scss' as *;

header {
  h1, p {
  font-weight: 600;
  font-size: 4rem;
  }
  .image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow:  2px 5px 10px 5px rgba(255, 255, 255, 0.3);
    opacity: 0;
    transition: opacity 1s ease-in-out;
    img {
      object-position: 0 30%;
    }
    
   }
  //  load class is added by a function in main.js 
  .image.load {
    opacity: 1;
  }

}

 /* Extra small devices (phones) */
@media (max-width: 575.98px) {
  header {
    h1, p {
      font-weight: 600;
      font-size: 3.2rem;
    } 
    .image {
      width: 150px;
      height: 150px;
      }
  }
 
}






</style>