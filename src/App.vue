<template>
  <q-layout>
    <Navbar />
    <q-page-container>
      <div id="app">
        <router-view />
      </div>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import Customer from "@/components/pages/customer/Customer.vue";
import Homepage from "@/components/pages/home/HelloWorld.vue";
import Navbar from "@/components/pages/statis/Navbar.vue";
import Admin from "@/components/pages/admin/Admin.vue";
import Login from "@/components/pages/login/Login.vue"

export default {
  name: "LayoutDefault",

  components: {
    Homepage,
    Login,
    Customer,
    Navbar,
    Admin
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
