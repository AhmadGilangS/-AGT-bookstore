<template>
  <q-page>
    <q-btn @click="showCart = !shoCart" v-show="!verified" />
    {{ products.length + (products.length > 1 || products.length === 0 ? " items" : " item") }}
    <div class="row">
      <div class="col-12">
        <div class="q-pa-md row items-start q-gutter-md justify-center" style="margin-top:20px;">
          <q-card
            class="my-card oke"
            v-for="product in dataProduct"
            :key="product.id"
            style="margin: 15px;"
          >
            <center>
              <div class="zoom-effect">
                <div
                  class="kotak"
                ><img :src="product.gambarProduct" /></div>
              </div>
              <q-card-section class="deskripsi">
                <div class="text-h6">{{product.nameProduct}}</div>
                <div class="text-subtitle2">Rp. {{product.hargaProduct}}</div>
              </q-card-section>

              <div class="aksi">
                <!-- <q-btn
                  align="around"
                  class="btn-fixed-width"
                  color="white"
                  outline-color="black"
                  label="Add to Cart"
                  icon="add"
                />-->
                <q-btn
                  @click="addToCart(product)"
                  label="add to cart"
                  outline
                  color="black"
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
import product_api from "../../../api/product/index";

export default {
  name: "Customer",

  data() {
    return {
      dataProduct: [],
      products: [],
      showCart: false,
      verified: false,
      quantity: 1
    };
  },

  computed: {
    total() {
      var total = 0;
      for (var i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(product) {
      product.quantity += 1;
      this.products.push(product);
    },
    removeFromCart(product) {
      product.quantity -= 1;
      this.products.splice(this.products.indexOf(product), 1);
    }
  },

  beforeCreate() {
    let self = this;

    product_api
      .getAllProduct(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        console.log(res);
        self.dataProduct = res;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
