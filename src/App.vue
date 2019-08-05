<template>
<<<<<<< HEAD
 
    
   
<q-layout >

 <font-awesome-icon icon="user-secret" />
  <q-page-container>
      <!-- <HelloWorld /> -->
     <Navbar/>   
       <!-- <Admin/> -->
=======
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <customer />
>>>>>>> f2299fc0c3531c38d799c2c20debbc69d454f8bf
    </q-page-container>
</q-layout>
</template>

<script>
<<<<<<< HEAD
import Customer from './components/pages/customer/Customer.vue' 
import HelloWorld from './components/pages/admin/Admin.vue' 
import Navbar from './components/pages/statis/Navbar.vue'
import Admin from './components/pages/admin/Admin.vue' 
=======
import customer from '@/components/pages/customer/Customer.vue'
>>>>>>> f2299fc0c3531c38d799c2c20debbc69d454f8bf

export default {
  name: 'LayoutDefault',

  components: {
<<<<<<< HEAD
    HelloWorld,
    Customer, 
    Navbar,
    Admin
=======
    customer
>>>>>>> f2299fc0c3531c38d799c2c20debbc69d454f8bf
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
