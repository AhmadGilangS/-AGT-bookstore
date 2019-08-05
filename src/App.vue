<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <customer />
    </q-page-container>
  </q-layout>
</template>

<script>
import customer from '@/components/pages/customer/Customer.vue'

export default {
  name: 'LayoutDefault',

  components: {
    customer
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
