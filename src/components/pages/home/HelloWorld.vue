<template>

<q-page>
  
  <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="@/assets/BackgroundBuku.jpg" style="width: 100%; height:100%;">
      </template>
      <template v-slot:content="scope">
        <div
          class="absolute column"
          :style="{
          opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
          top: (scope.percentScrolled * 60) + '%',
          left: 0,
          right: 0
          }" >
      <img src="@/assets/logo2.png" style="width: 20%; height: 50%;">
      <div class="text-h3 text-white text-left">AGT Bookstore</div>
      </div>            
      </template>
    </q-parallax>

    

  <div class="row flex flex-center" padding="left 10">
    <div>
      <img src="@/assets/logo2.png" style="width: 80%; height: 80%;">
    </div>
    <div class="center">
      <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      style="width: 100%; height: 100%"
     >
      <q-carousel-slide :name="1">
         <img src="@/assets/book/Buku1.jpg" style="width: 50%; height: 50%;">
      </q-carousel-slide>
      
      <q-carousel-slide :name="2">
      <img src="@/assets/book/Buku2.jpg" style="width: 50%; height: 50%;">
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <img src="@/assets/book/Buku3.jpg" style="width: 50%; height: 50%;">
      </q-carousel-slide>

      <q-carousel-slide :name="4">
         <img src="@/assets/book/Buku4.jpg" style="width: 50%; height: 50%;">
      </q-carousel-slide>
    </q-carousel>
    </div>
</div>
    <div>
     <img src="@/assets/AlamatToko.png" style="width: 60%; height: 60%;">
    </div>

    
      </div>
</q-page>
      
</template>

<style>
</style>

<script>


export default {

  data(){
    return{
      slide:1
    }
  },
  
  name: 'Homepage',
  components: {
 
  }
}
</script>
