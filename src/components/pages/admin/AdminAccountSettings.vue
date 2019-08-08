
<template>
  <div class="">
    <q-layout view="lHh Lpr lff" container style="height:750px;" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="left" />
          <q-toolbar-title>Header</q-toolbar-title>
          <q-icon name="home"></q-icon>
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
      <div style="margin-top:180px;">
        <!-- <q-scroll-area style="height: calc(100% - 10px); margin-top: 750px; border-right: 1px solid #ddd"> -->
          <q-list padding>
            <router-link class="a" to="/Admin-Account-Settings" style="text-decoration:none">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Account Settings
              </q-item-section>
            </q-item>
            </router-link>

            <router-link class="a" to="/Admin-Costumer-Order" style="text-decoration:none">
            <q-item clickable active v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>

              <q-item-section>
                Costumer Order
              </q-item-section>
            </q-item>
            </router-link>

            <router-link class="a" to="/Admin-Order-Receipt" style="text-decoration:none">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment_turned_in" />
              </q-item-section>

              <q-item-section>
                Order Receipt
              </q-item-section>
            </q-item>
            </router-link>
          </q-list>
        <!-- </q-scroll-area> -->
      </div>
        <div class="absolute-top" > 
          <img src="@/assets/bg-ava-cms.png" style="height: 165px">
          <div style="margin-top:-30px; ">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="@/assets/logo1.png">
            </q-avatar>
            <div class="text-weight-bold font-white">Admin AGT Book</div>
            <div class="font-white">Selamat Bekerja!</div>
          </div>
          </div>
        </div>
      </q-drawer>

      <q-page-container > 
        <div class="bg-primary text-white shadow-2 row  "  >
          
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;Admin Account Settings</h5>
          <br>
          <br>
        </div>

        <div class="flex flex-center  " >
          <br>
          <br>
          <br>
          <br>
              <q-form
            @submit="onSubmit"
            @reset="onReset"
            style="margin-top: 100px;" 
          >
            <q-input
              filled
              v-model="fullname"
              label="Fullname *"
              hint="User Fullname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
              filled
              v-model="email"
              label="Email Address *"
              hint="User Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
              filled
              v-model="password"
              label="Password *"
              hint="User Password"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
              filled
              type="number"
              v-model="phone"
              label="Phone number *"
              hint="Phone Number"
              lazy-rules
              :rules="[ val => val.length <= 12 || 'Please type maximum 12 number']"
              />

              <q-input
              filled
              v-model="address"
              label="Address *"
              hint="User Address"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-toggle v-model="accept" label="I accept the license and terms" />
              <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        <!-- <q-page padding>
           
        </q-page> -->
        </div>
      </q-page-container>
    </q-layout>
  </div>

  



</template>     


<style>

.font-white{
  color: white;
}


</style>



<script>

export default {
  data () {
    return {
      name: null,
      age: null,
      fullname:'',
      email:'',
      password:'',
      phone:'',
      address:'',
      accept:'true',
      
      drawer: true, 

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.firstName = null
      this.lastName = null
      this.email = null
      this.phone = null
      this.accept = false
    }
  }
}
 
</script>
