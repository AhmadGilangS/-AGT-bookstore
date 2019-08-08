<template> 
  <q-page  >

    <q-toolbar class="nav-margin bg-nav-custom text-black q-my-md shadow-2" style="margin-top:-1px; ">
    <router-link class="a" to="/">
      <q-btn stretch flat   >
        <div size="50px"> 
         <img src="@/assets/new-agt.png" style="width: 80px; height: 40px;">
        </div>
      </q-btn>
    </router-link>
    <q-space />
 
    <div class="button">
      <q-btn-dropdown stretch flat label icon="person" class="right font-black">
        <q-list>
          <q-separator inset spaced />
          <q-item-label header class="font-black">Have Account</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <router-link to="/login">
                <q-item-label class="font-black">Login</q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
          <q-separator inset spaced />

          <q-item-label header class="font-black">Not Registered</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <router-link to="/register">
                <q-item-label class="font-black">Registers</q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <router-link class="a" to="/catalog">
      <q-btn stretch flat label="Catalog" class="font-black-weight right"></q-btn>
      </router-link>
    </div>
 
  </q-toolbar>
    

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
