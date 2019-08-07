<template>
  <q-page>

    <q-btn
      id="show-modal"
       color= 'orange'
      class="floatingchart" 
      @click="showCart = !showCart" 
      v-show="!verified"
      :label="products.length"
      icon="shopping_cart"

    />

    <!-- <div class="cart" v-show="showCart">
      <div v-show="products.length > 0">
          <table class="table1" >
            <tr>
              <th>Nama Barang</th>
              <th>Kuantiti</th>
              <th>Jumlah</th>
              <th>Batalkan</th>
            </tr>
          </table>
          <table class="table1" >
            <div v-for="productCart in products" :key="productCart.id">
              <tr>
                <td><center>{{ productCart.nameProduct }}</center></td>
                <td><center>{{ productCart.quantity }}</center></td>
                <td><center>Rp. {{ productCart.hargaProduct * productCart.quantity }}</center></td>
                <td><center><q-btn icon="delete_forever" @click="removeFromCart(productCart)"></q-btn></center></td>
              </tr>
            </div>
          </table>
          <q-btn color="blue" @click="verified = true, showCart = false">Check out</q-btn>
        </div>
        <div v-show="products.length===0">
          <p>Your Cart is Empty!</p>
        </div>
    </div>  -->
      <!-- !!!!!!!!!!!!!!! -->

    <!-- <div class="cart" v-show="showCart">
      <div v-show="products.length > 0">
        <div class="row">
          <div class="col-md-3">Product Name</div> 
          <div class="col-md-3">Quantity</div> 
          <div class="col-md-3">Price</div> 
          <div class="col-md-3">Cancel</div> 
        </div>
        <div class="row">
            <div v-for="productCart in products" :key="productCart.id">
              <div class="col-md-3">{{ productCart.nameProduct }}</div> 
              <div class="col-md-3">{{ productCart.quantity }}</div> 
              <div class="col-md-3">Rp. {{ productCart.hargaProduct * productCart.quantity }}</div> 
              <div class="col-md-3"><q-btn icon="delete_forever" @click="removeFromCart(productCart)"></q-btn></div> 
            </div>
        </div>
      </div>   
           
          <q-btn color="blue" @click="verified = true, showCart = false">Check out</q-btn>
        
        <div v-show="products.length===0">
          <p>Your Cart is Empty!</p>
        </div>
    </div> -->

      <!-- !!!!!!!!!!!!!!! -->

       <div class="cart" v-show="showCart">
          <div v-show="products.length > 0">
            <div class="row"> 
              <div class="col-md-3"><b>Product Name</b></div> 
              <div class="col-md-3"><b>Quantity</b></div> 
              <div class="col-md-3"><b>Price</b></div> 
              <div class="col-md-3"><b>Cancel</b></div> 
            </div>
            <br>
            <q-scroll-area class="fit">
            <div class="q-pa-sm">
              <div v-for="n in 1" :key="n"> 
                <div v-for="productCart in products" :key="productCart.id">
                  <div class="row">
                    <div class="col-md-3">{{ productCart.nameProduct }}</div> 
                    <div class="col-md-3">{{ productCart.quantity }}</div> 
                    <div class="col-md-3">Rp. {{ productCart.hargaProduct * productCart.quantity }}</div> 
                    <div class="col-md-3">
                      <!-- <div style=""> -->
                      <q-btn @click="removeFromCart(productCart)" icon="delete_forever" style="display: inline; bottom: 30px; "></q-btn>
                       <!-- <div @click="removeFromCart(productCart)">
                        <input type="button" icon="delete_forever"/> -->
                       <!-- </div> -->
                      <!-- </div> -->
                    </div> 
                  </div>
                </div>
              </div>
              <q-btn color="blue"  @click="verified = true, showCart = false">Check out</q-btn> 
            </div>
            </q-scroll-area> 
            
            
          </div>
              
          <div v-show="products.length===0" style=" width: 200px;
    height: 60px;">
            <p>Your Cart is Empty!</p>
          </div>
          
        </div>

    <div class="row">
      <div class="col-12" v-show="!verified">
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

      <div class=".col-md-6 .offset-md-3" v-show="verified">
        <div v-for="productnya in products" :key="productnya.id">
          <strong>{{ productnya.nameProduct }}</strong> -
          <strong>{{ productnya.quantity }}</strong> -
          <strong>{{ productnya.hargaProduct * productnya.quantity }}</strong>
        </div>
      </div>
      <!-- <div class="col-4"></div> -->
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

.floatingchart{
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

.cart {
  > div {
    z-index: 100;
    background: #fff;
    padding: 20px 30px;
    // position: absolute;
    position: fixed;
    right: 30px;
    width: 600px;
    height: 330px;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    div {
      text-align: center;
    }
    margin-top : 50px;
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
      showCart: false,
      verified: false,
      quantity: 1
    };
  },

  computed: {
    total() {
      var total = 0;
      for (var i = 0; i < this.products.length; i++) {
        total += this.products[i].hargaProduct;
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
      if(product.quantity==0){
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
