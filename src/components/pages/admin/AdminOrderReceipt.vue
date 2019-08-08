
<template>
  <div class="">
    <q-layout view="lHh Lpr lff" container style="height: 750px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="left" /> 
        </q-toolbar>
        <router-link to="/homepage" >
          <q-icon name="home" style="font-size:28px; margin-right: 2%; margin-top: -3.4%;" class="right" ></q-icon>
        </router-link>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
        show-if-above
        style="background-image: @/assets/logo1.png;"
        content-class="bg-grey-3"
      >
      <div style="margin-top:180px;">
        <!-- <q-scroll-area style="height: calc(100% - 10px); margin-top: 750px; border-right: 1px solid #ddd"> -->
          <q-list padding>
            <router-link class="a" to="/admin-dashboard" style="text-decoration:none">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Account Settings
              </q-item-section>
            </q-item>
            </router-link>

            <router-link class="a" to="/admin-costumer-order" style="text-decoration:none">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>

              <q-item-section>
                Costumer Order
              </q-item-section>
            </q-item>
            </router-link>

            <router-link class="a" to="/admin-costumer-order" style="text-decoration:none">
            <q-item clickable active v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment_turned_in" />
              </q-item-section>

              <q-item-section>
                Order Receipt
              </q-item-section>
            </q-item>
            </router-link>
          </q-list>
        <!-- </q-scroll-area> -->
      </div>
        <div class="absolute-top" > 
          <img src="@/assets/bg-ava-cms.png" style="height: 165px">
          <div style="margin-top:-30px; ">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="@/assets/logo1.png">
            </q-avatar>
            <div class="text-weight-bold font-white">Admin AGT Book</div>
            <div class="font-white">Selamat Bekerja!</div>
          </div>
          </div>
        </div>
      </q-drawer>


      <q-page-container>
        <div class="bg-primary text-white shadow-2 row" style="">
          
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;Admin Order Receipt</h5>
        <br>
        <br>
        </div>


        <q-page padding>
           
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>     


<style>




</style>



<script>
export default {
  data () {
    return {
      drawer: true
    }
  }
}
</script>
