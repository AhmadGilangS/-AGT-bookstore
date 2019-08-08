<template>
  <q-page>
    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 350px; width:100%">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="flex-center">
            <img src="@/assets/logo2.png" style="width:300px; height:200" />
          </div>

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
            v-model="pass"
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
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
        <br>
        <br>
          <router-link to="/login">
            <center>Already Have an Account?</center>
          </router-link>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </q-page>
</template>


<style>
</style>

<script>
import register from "../../../api/register/index"
import axios from 'axios'

export default {
  data() {
    return {
      columns: [
        {
          name: "fullname",
          required: true,
          label: "Fullname",
          align: "left",
          field: row => row.fullname,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "email",
          required: true,
          label: "Email",
          align: "left",
          field: row => row.email,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "pass",
          required: true,
          label: "Password",
          align: "left",
          field: row => row.pass,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "phone",
          required: true,
          label: "Phone Number",
          align: "left",
          field: row => row.phone,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "address",
          required: true,
          label: "Address",
          align: "left",
          field: row => row.address,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "roles",
          required: true,
          label: "roles",
          align: "left",
          field: row => row.roles,
          format: val => `${val}`,
          sortable: true
        }
      ],
      

      fullname: "",
      email: "",
      pass: "",
      phone: "",
      address: "",
      roles:"customer",
      accept: "true"
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "fas fa-exclamation-triangle",
          message: "You need to accept the license and terms first"
        });
      } else {
        let param = {
          fullname: this.fullname,
          email: this.email,
          pass: this.pass,
          phone: this.phone,
          address: this.address,
          roles: this.roles
        };
        const self = this;
        register.submitNewUser(window, param)
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-check-circle",
          message: "Submitted"
        });
        self.$router.push("/");
      }
    },

    onReset() {
      this.fullname = null;
      this.email = null;
      this.pass = null;
      this.phone = null;
      this.address = null;
      this.accept = false;
    }
  }
};
</script>