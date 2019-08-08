<template>
  <q-layout>
    <!-- <AdminAccountSettings />
    <Header /> 
    <Navbar />
    <Table />
    <router-view /> -->
    <q-page-container>
      <div id="app">
        <router-view />
      </div>
    </q-page-container>
    <Footer />  
  </q-layout>
</template>

<script>
import Header from "@/components/pages/statis/Header.vue";
import Footer from "@/components/pages/statis/Footer.vue";
import Navbar from "@/components/pages/statis/Navbar.vue";
import HomePage from "@/components/pages/home/Homepage.vue";
import LandingPage from "@/components/pages/home/Landingpage.vue";
import Catalog from '@/components/pages/customer/Catalog.vue';
import AdminAccountSettings from "@/components/pages/admin/AdminDashboard.vue";
import AdminCostumerOrder from "@/components/pages/admin/AdminCostumerOrder.vue";
import AdminOrderReceipt from "@/components/pages/admin/AdminOrderReceipt.vue";
import OwnerAccountSettings from "@/components/pages/owner/OwnerDashboard.vue";
import OwnerBookSales from "@/components/pages/owner/OwnerBookSales.vue";

import Table from "@/components/pages/owner/Table.vue";



export default {
  name: "LayoutDefault",

  components: {
    Header,
    Footer,
    Navbar,
    HomePage,
    LandingPage,
    AdminAccountSettings,
    AdminCostumerOrder,
    AdminOrderReceipt,
    OwnerBookSales,
    OwnerAccountSettings,
    Table,
    Catalog
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
