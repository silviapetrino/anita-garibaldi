<script>
import cards from '../../data/cards';

  export default {
    name: 'Card',
    props: {
      cardObj : Object
    },
    data(){
      return {
        isVisible: true,
        cards
      };
    },
    methods: {
      toggleItemVisible(){
        this.isVisible = !this.isVisible;
      },
   
    }
  }
</script>
<template>

    <div class="col p-4 p-lg-2 overflow-auto">
      <div class="card-sp cursor w-100">
        <div class="wrap">
          <div @click="toggleItemVisible" class="image w-100 h-100">
            <img v-if="isVisible" :src="cardObj.imgPath" alt="anita" class="w-100 h-100 object-fit-cover">
          </div>
          <div v-if="isVisible" class="number d-flex justify-content-center align-items-center">{{ cardObj.id }}</div>
          <div @click="toggleItemVisible" class="text p-3">
            <h5 class="fw-bold">{{ cardObj.title }}</h5>
            <p>{{ cardObj.text }}</p>
          </div>
        </div>
      </div>
    </div>

</template>


<style lang="scss" scoped>

@use '../../scss/main.scss' as *;
.card-sp {
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 6px;
  background-color: $blue-hover;
  position: relative;
  &:hover {
    .image img, .number {
      opacity: 1;
    }   
  }
  .image {
    object-position: center;
    img {
      opacity: .7;
    }
  }
  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    background-color: $blue-hover;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: .8;
    font-size: 2rem;
    font-weight: 600;
  }
  .text {
    height: 250px;
    overflow: auto;
    background-color: $blue-hover;
    color: $white;
    p {
      font-size: 1rem;
    }
  }
}

  .col {
  position: relative;
  }


  // media queries 

  /* Extra small devices (phones) */
@media (max-width: 575.98px) {
  .card-sp {
    height: 300px;
    .text {
      height: 300px;
      p {
      font-size: 1.2rem;
      line-height: 1.6rem;
      padding: 1rem;
    }
    }
    
  }
}

/* Small devices (tablets) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .card-sp {
    height: 450px;
  }
}

/* Medium devices (desktops) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .card-sp {
    height: 300px;
  }
}

/* Large devices (large desktops) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .card-sp {
    height: 200px;
    .text {
    height: 200px;
    overflow: auto;
    p {
      font-size: .9rem;
    }
  }
  }
}



</style>