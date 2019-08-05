<template>
  <div class="q-pa-md">

    <q-toolbar elevated class="bg-cyan">
          <q-btn flat round dense icon="assignment_ind" />

          <q-space />

          <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
          <q-btn flat round dense icon="gamepad" />
        </q-toolbar>

        <q-toolbar elecated class="bg-cyan" inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Toolbar" />
          </q-breadcrumbs>
        </q-toolbar>

    <q-layout view="lHh lpr lFf" container style="height: 450px" class="shadow-2 rounded-borders">
      <q-header >
        
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
         <!-- <Homepage /> -->
          <Login />
         
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Homepage from '@/components/pages/home/HelloWorld.vue'
import Login from '@/components/pages/login/Login.vue'
export default {
  name: 'LayoutDefault',

  components: {
    Homepage,
    Login
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  }
}
</script>

<style>
</style>
