<template>

  <q-page  >

    <div class="row flex flex-center">
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
  <div class="col-md-3" style="margin-top:-65px;">
     
    <img src="@/assets/banner/vertical-banner-1.jpg" style="max-width: 325px; max-height:300px; width: 325px; height: 300px;">
  </div>
  <div class="col-md-3" style="margin-top:-65px;">
   
    <img src="@/assets/banner/vertical-banner-2.jpg" style="max-width: 325px; max-height:300px; width: 325px; height: 300px;">
  </div>

  </div>

  
     <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-6">
        <q-img
          src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            "Membaca adalah kegiatan yang menyenangkan, untuk dilakukan sejak usia dini." - Mama Rafi -
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            "Disaat senggang, membaca adalah kegiatan baik yang dapat mendatangkan berjuta manfaat." -Rina, Karyawati-
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://images.pexels.com/photos/864938/pexels-photo-864938.png">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            "Membaca sudah menjadi Hobi untuk Saya. Oleh karenanya, Saya sangat mendambakan buku-buku yang berkualitas." -Rini, Freelancer-
          </div>
        </q-img>
      </div>

      <div class="col-6">
        <q-img src="https://images.pexels.com/photos/545068/pexels-photo-545068.jpeg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            "Meskipun memiliki ketertarikan terhadap Genre yang berbeda, membaca buku disamping orang yang dicinta adalah sesuatu yang menyenangkan untuk Saya." -Ali, Kontraktor-
          </div>
        </q-img>
      </div>
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
