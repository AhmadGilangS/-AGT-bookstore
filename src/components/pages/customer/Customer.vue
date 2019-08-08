<template>
  <q-page>

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

    <div>
      <q-btn
        id="show-modal"
        color="orange"
        class="floatingchart"
        @click="layer2 = !layer2"
        v-show="layer1"
        icon="shopping_cart"
        :label="products.length"
      />
    </div>

    <div class="cart" v-show="layer2">
      <div v-show="products.length > 0">
        <div class="row">
          <div class="col-md-3">
            <b>Product Name</b>
          </div>
          <div class="col-md-3">
            <b>Quantity</b>
          </div>
          <div class="col-md-3">
            <b>Price</b>
          </div>
          <div class="col-md-3">
            <b>Cancel</b>
          </div>
        </div>
        <br />
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 1" :key="n">
              <div v-for="productCart in products" :key="productCart.id">
                <div class="row">
                  <div class="col-sm-3">{{ productCart.nameProduct }}</div>
                  <div class="col-sm-3">{{ productCart.quantity }}</div>
                  <div class="col-sm-3">Rp. {{ productCart.hargaProduct * productCart.quantity }}</div>
                  <div class="col-sm-3">
                    <q-btn
                      @click="removeFromCart(productCart)"
                      icon="delete_forever"
                      style="display: inline; bottom: 30px; "
                    ></q-btn>
                  </div>
                </div>
              </div>
            </div>
            <q-btn color="blue" @click="layer1 = false, layer2 = false, layer3 = true">Check out</q-btn>
          </div>
        </q-scroll-area>
      </div>

      <div v-show="products.length===0" style=" width: 200px;
    height: 60px;">
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
<!-- Layer 3 -->
      <div class="checkout3" style="" v-show="layer3">
        <br>
        <br>
        <div class="row">
          <div class="col-md-3">
            <b>Product Name</b>
          </div>
          <div class="col-md-3">
            <b>Quantity</b>
          </div>
          <div class="col-md-3">
            <b>Price</b>
          </div>
          <div class="col-md-3">
            <b>Total Price</b>
          </div>
        </div>
        <br>
        <br>
        <div class="">
          <div v-for="productnya in products" :key="productnya.id">
            <div class="row">
              <div class="col-md-3">{{ productnya.nameProduct }}</div>
              <div class="col-md-3">{{ productnya.quantity }}</div>
              <div class="col-md-3">Rp. {{ productnya.hargaProduct }}</div>
              <div class="col-md-3">Rp. {{ productnya.hargaProduct * productnya.quantity }}</div>
            </div> 
          </div>
          <br>
          <br>
          <div class="row">
              <div class="col-sm-3"> </div>
              <div class="col-sm-3"> </div>
              <div class="col-sm-3"><b>Total Belanja</b></div>
              <div class="col-sm-3">Rp. {{ total }}</div>
          </div>
          <br>
          <br>
          <div class="row">
              <div class="col-sm-3"> </div>
              <div class="col-sm-3"> </div>
              <div class="col-sm-3"> </div>
              <div class="col-sm-3">
                <q-btn
                @click="layer4 = true, layer3 = false, createPurchase()"
                color="blue"
                icon="payment" 
                >Payment</q-btn>
              </div>
          </div>
          
        </div>

        
      </div>

      

      <div v-show="layer4">
        <p>oke siap</p>
      </div>
    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
.table1 {
  font-family: sans-serif;
  color: #232323;
}

.table1, th, td {
  // border: 1px solid #999;
  padding: 8px 20px;
  border: 1px solid #999;
}

.kanan {
  float: right;
}

.floatingchart {
  float: right;
  margin-left: 90%;
  position: fixed;
  z-index: 100;
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

.checkout3{
  height:800px; 
  width:800px; 
  margin-left:25%;
} 

.checkout {
  > div {
    // background: #fff;
    // padding: 20px 30px;
    position: absolute;
    // position: fixed;
    // right: 30px;
    // width: 65%;
    // box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);

    div {
      // text-align: center;
    }

    // margin-top: 50px;
  }

  ul, li, p {
    // margin-bottom: 0;
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

.cart {
  > div {
    z-index: 100;
    background: #fff;
    padding: 20px 30px;
    // position: absolute;
    position: fixed;
    right: 30px;
    width: 50%;
    height: 65%;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);

    div {
      text-align: center;
    }

    margin-top: 50px;
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
import purchase_api from "../../../api/purchase/index";

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
      quantity: 1
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
    },
    createPurchase() {
      var idprod = [];
      var qtyprod = [];
      for (let i = 0; i < this.products.length; i++) {
        idprod[i] = this.products[i].id;
        qtyprod[i] = this.products[i].quantity;
      }
      let param = {
        idCustomer: "gina",
        idProduct: idprod,
        qtyProduct: qtyprod,
        totalPayment: this.total,
        status: "requested"
      };
      //console.log(param)
      purchase_api
        .postPurchase(window, param)
        .then(function(result) {
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
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
