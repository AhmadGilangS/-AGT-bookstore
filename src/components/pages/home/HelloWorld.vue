<template>

  <q-page>

    <div class="row">
      <div class="col-md-6">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          autoplay
          transition-prev="slide-right"
          transition-next="slide-left" 
        >
          <q-carousel-slide :name="1">
            <img src="@/assets/banner/banner-1.jpg" style="width: 650px; height: 300px;">
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <img src="@/assets/banner/banner-2.jpg" style="width: 650px; height: 300px;">
          </q-carousel-slide>
          <q-carousel-slide :name="3">
            <img src="@/assets/banner/banner-3.jpg" style="width: 650px; height: 300px;">
          </q-carousel-slide>
          <q-carousel-slide :name="4">
            <img src="@/assets/banner/banner-4.jpg" style="width: 650px; height: 300px;">
          </q-carousel-slide>
          <q-carousel-slide :name="5">
            <img src="@/assets/banner/banner-5.jpg" style="width: 650px; height: 300px;">
          </q-carousel-slide>
        </q-carousel>
  
     </div>
  <div class="col-md-3" style="margin-top:-5px;">
    <br>
    <img src="@/assets/banner/vertical-banner-1.jpg" style="max-width: 325px; max-height:300px; width: 325px; height: 300px;">
  </div>
  <div class="col-md-3" style="margin-top:-5px;">
    <br>
    <img src="@/assets/banner/vertical-banner-2.jpg" style="max-width: 325px; max-height:300px; width: 325px; height: 300px;">
  </div>

  </div>

  
    

  <div class="row flex" >
    
       </div>
    <div>
     <img src="@/assets/AlamatToko.png" style="width: 60%; height: 60%;">
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
