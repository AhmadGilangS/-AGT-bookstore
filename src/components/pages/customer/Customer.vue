<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <div class="q-pa-md row items-start q-gutter-md justify-center" style="margin-top:20px;">
          <q-card class="my-card oke" v-for="n in 9" style="margin: 15px;">
            <center>
              <div class="zoom-effect">
                <div class="kotak">
                  <img src="..\..\..\assets\fisika.png" />
                </div>
              </div>

              <q-card-section class="deskripsi">
                <div class="text-h6">Buku Hantu</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <div class="aksi">
                <!-- <q-btn
                  align="around"
                  class="btn-fixed-width"
                  color="white"
                  outline-color="black"
                  label="Add to Cart"
                  icon="add"
                /> -->
                <q-btn
                  label="add to cart"
                  outline color="black"
                  icon="add"
                />
              </div>
            </center>
          </q-card>
        </div>
      </div>
      <!-- <div class="col-4"></div> -->
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>

.gambar {
  height: 200px;
}

.deskripsi {
  height: 100px;
}

.aksi {
  height: 50px;
}

.my-card {
  width: 250px;
  height: 350px;
}

.zoom-effect {
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
}

.kotak {
  height: 200px;
  width: 250px;
  position: absolute;
  top: 0;
  left: 0;
}

.kotak img {
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  height: 200px;
  width: 250px;
}

.zoom-effect:hover .kotak img {
  -webkit-transform: scale(5);
  transform: scale(1.3);
}
</style>

<script>
export default {
  name: "Customer",

  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }
};
</script>
