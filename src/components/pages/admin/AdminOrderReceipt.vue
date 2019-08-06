
<template>
  <div class="">
    <q-layout view="lHh Lpr lff" container style="height: 750px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="left" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
        show-if-above
        style="background-image: @/assets/logo1.png;"
        content-class="bg-grey-3"
      >
      <div style="margin-top:150px;">
        <q-scroll-area style="height: calc(100% - 10px); margin-top: 750px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable active v-ripple>
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Account Settings
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>

              <q-item-section>
                Costumer Order
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment_turned_in" />
              </q-item-section>

              <q-item-section>
                Order Receipt
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="@/assets/logo1.png">
            </q-avatar>
            <div class="text-weight-bold">Admin AGT Book</div>
            <div>Selamat bekerja!</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>


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
