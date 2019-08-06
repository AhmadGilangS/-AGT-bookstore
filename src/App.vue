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
import Navbar from "@/components/pages/statis/Navbar.vue";

export default {
  name: "LayoutDefault",

  components: {
    Navbar
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
