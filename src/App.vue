<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import test from '@/components/pages/home/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    test
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
