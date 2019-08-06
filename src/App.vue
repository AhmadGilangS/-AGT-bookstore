<template>
  <q-layout>
    <OwnerBookSales />
    <!-- <Navbar /> -->
    <q-page-container>
      <!-- <div id="app">
        <router-view />
      </div> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "@/components/pages/statis/Navbar.vue";
import AdminAccountSettings from "@/components/pages/admin/AdminAccountSettings.vue";
import AdminCostumerOrder from "@/components/pages/admin/AdminCostumerOrder.vue";
import AdminOrderReceipt from "@/components/pages/admin/AdminOrderReceipt.vue";
import OwnerAccountSettings from "@/components/pages/owner/OwnerAccountSettings.vue";
import OwnerBookSales from "@/components/pages/owner/OwnerBookSales.vue";


export default {
  name: "LayoutDefault",

  components: {
    Navbar,
    AdminAccountSettings,
    AdminCostumerOrder,
    AdminOrderReceipt,
    OwnerBookSales,
    OwnerAccountSettings
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>

<style>
</style>
