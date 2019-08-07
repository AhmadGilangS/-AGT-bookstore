<template>
  <q-page>
    <div>
      <q-btn
        id="show-modal"
        class="kanan tetep"
        @click="layer2 = !layer2"
        v-show="layer1"
        icon="shopping_cart"
        :label="products.length"
      />
    </div>

    <div>
      <div class="cart" v-show="layer2">
        <div v-show="products.length > 0">
          <table>
            <tr>
              <th>Nama Barang</th>
              <th>Kuantiti</th>
              <th>Jumlah</th>
            </tr>
            <div v-for="productCart in products" :key="productCart.id">
              <tr>
                <td>{{ productCart.nameProduct }}</td>
                <td>
                  <q-btn icon="delete_forever" @click="removeFromCart(productCart)"></q-btn>
                  {{ productCart.quantity }}
                </td>
                <td>Rp. {{ productCart.hargaProduct * productCart.quantity }}</td>
              </tr>
            </div>
          </table>
          <q-btn color="blue" @click="layer1 = false, layer2 = false, layer3 = true">Check out</q-btn>
        </div>
        <div v-show="products.length===0">
          <p>Your Cart is Empty!</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12" v-show="layer1">
          <div class="q-pa-md row items-start q-gutter-md justify-center" style="margin-top:20px;">
            <q-card
              class="my-card oke"
              v-for="product in dataProduct"
              :key="product.id"
              style="margin: 15px;"
            >
              <center>
                <div class="zoom-effect">
                  <div class="kotak">
                    <img :src="getImgUrl(product.gambarProduct)" v-bind:alt="product" />
                  </div>
                </div>
                <q-card-section class="deskripsi">
                  <div class="text-h6">{{product.nameProduct}}</div>
                  <div class="text-subtitle2">Rp. {{product.hargaProduct}}</div>
                </q-card-section>

                <div class="aksi">
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

        <div class=".col-md-6 .offset-md-3" v-show="layer3">
          <div class="box">
            <div class="head"></div>
            <div class="body">
              <table>
                <tr>
                  <th>Nama Barang</th>
                  <th>Kuantiti</th>
                  <th>Jumlah</th>
                </tr>
                <div v-for="productnya in products" :key="productnya.id">
                  <tr>
                    <td>{{ productnya.nameProduct }}</td>
                    <td>{{ productnya.quantity }}</td>
                    <td>Rp. {{ productnya.hargaProduct * productnya.quantity }}</td>
                  </tr>
                </div>
              </table>
              <h5>
                Total:
                <span>Rp. {{ total }}</span>
              </h5>
            </div>
            <div class="foot">
              <q-btn @click="layer4 = true, layer3 = false" color="blue" icon="payment">Payment</q-btn>
            </div>
          </div>
        </div>


        <div v-show="layer4">
          <p>oke siap</p>
        </div>



      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.kanan {
  left: 90%;
}

.tetep {
  position: fixed;
}

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

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.cart {
  > div {
    z-index: 100;
    background: #fff;
    padding: 20px 30px;
    position: absolute;
    right: 30px;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);

    div {
      text-align: center;
    }
  }

  ul, li, p {
    margin-bottom: 0;
  }

  button {
    margin: 20px 0 10px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 2px;
  }

  input {
    width: 30px;
  }
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
      layer4: false,
      layer3: false,
      layer2: false,
      layer1: true,
      quantity: 1,
      donePayment: false
    };
  },

  computed: {
    total() {
      var total = 0;
      var harga;
      for (var i = 0; i < this.products.length; i++) {
        harga =
          parseInt(this.products[i].quantity) *
          parseInt(this.products[i].hargaProduct);
        total += harga;
      }
      return total;
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../../../assets/book/buku" + pic + ".png");
    },
    addToCart(product) {
      product.quantity += 1;
      if (this.products.indexOf(product) === -1) {
        this.products.push(product);
      } else {
        console.log("masuk ok");
      }
    },
    removeFromCart(product) {
      product.quantity -= 1;
      if (product.quantity == 0) {
        this.products.splice(this.products.indexOf(product), 1);
      }
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
