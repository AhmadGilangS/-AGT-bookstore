<template>

<q-form
@submit="onSubmit"
@reset="onReset" class="fixed-center" >
<div>
<img src="@/assets/logo2.png" style="width:300px; height:200">
</div>
    <q-input
        filled
        v-model="email"
        label="Email Address *"
        hint="Your Email Address"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="password"
        label="Password *"
        hint="Your Password"
        type="password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


     
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
 
</q-form>

</template>


<style>

</style>


<script>
export default {

     data () {
    return {
      email: null,
      password: null,

    }
  },

    methods: {
    onSubmit () {
      if (this.email!="asik" || this.password!="oke123") {
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
      this.email = null
      this.password = null
      
    }
  }
    
}
</script>

