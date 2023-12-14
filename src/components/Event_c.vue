<template>
    <div id="template">
    <div id="first_carousel" class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../assets/img_page_event/1_1.png" class="carousel-image"/>
        <q-carousel-slide :name="2" img-src="../assets/img_page_event/1_2.png" class="carousel-image"/>
        <q-carousel-slide :name="3" img-src="../assets/img_page_event/1_3.png" class="carousel-image"/>
      </q-carousel>
    </div>
    <q-btn class ="btn" color="purple" label="Se renseigner" href="https://www.instagram.com/p/C0MhpAANOR6/?hl=fr"/>
    <div id="second_carousel" class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
      <q-carousel-slide :name="1" img-src="../assets/img_page_event/2_1.png" class="carousel-image"/>
        <q-carousel-slide :name="2" img-src="../assets/img_page_event/2_2.png" class="carousel-image"/>
        <q-carousel-slide :name="3" img-src="../assets/img_page_event/2_3.png" class="carousel-image"/>
      </q-carousel>
      <q-btn class="btn" color="purple" label="Se renseigner" href="https://www.instagram.com/p/Cz5yPURtUQ6/?hl=fr"/>
    </div>
    <div id="third_carousel" class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
      <q-carousel-slide :name="1" img-src="../assets/img_page_event/3_1.png" class="carousel-image"/>
        <q-carousel-slide :name="2" img-src="../assets/img_page_event/3_2.png" class="carousel-image"/>
        <q-carousel-slide :name="3" img-src="../assets/img_page_event/3_3.png" class="carousel-image"/>
      </q-carousel>
      <q-btn color="purple" label="Se renseigner" href="https://www.instagram.com/p/Cz3a91ptk2C/?hl=fr"/>
    </div>
    <div id="fourth_carousel" class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
      <q-carousel-slide :name="1" img-src="../assets/img_page_event/4_1.png" class="carousel-image"/>
        <q-carousel-slide :name="2" img-src="../assets/img_page_event/4_2.png" class="carousel-image"/>
        <q-carousel-slide :name="3" img-src="../assets/img_page_event/4_3.png" class="carousel-image"/>
      </q-carousel>
      <q-btn color="purple" label="Se renseigner" href="https://www.instagram.com/p/CztDvautiW-/?hl=fr"/>
    </div>
</div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        slide: ref(1),
        autoplay: ref(true)
      }
    }
  }
  
  </script>

<style scoped>
    #first_carousel{
        margin-top: 12vh;
        margin-left: 0vh;
    }

    .carousel-image {
  max-width: 70%; 
  max-height: 70%; 
  width: auto; 
  height: auto; 
  margin-left: 29vh;
  border-radius: 6%;
  }
  
</style>