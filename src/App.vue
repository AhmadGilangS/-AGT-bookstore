<template>
  <q-layout>
    <font-awesome-icon icon="user-secret" />
    <q-page-container>
      <Navbar />
      <Customer />
    </q-page-container>
  </q-layout>
</template>

<script>
import Customer from "@/components/pages/customer/Customer.vue";
import HelloWorld from "@/components/pages/admin/Admin.vue";
import Navbar from "@/components/pages/statis/Navbar.vue";
import Admin from "@/components/pages/admin/Admin.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
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
