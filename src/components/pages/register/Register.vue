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
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>


<style>
</style>

<script>
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
          name: "password",
          required: true,
          label: "Password",
          align: "left",
          field: row => row.password,
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
        }
      ],

      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
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
          password: this.password,
          phone: this.phone,
          address: this.address
        };
        const self = this;
        Employee.submitNewEmployee(window, param)
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
      }
    },

    onReset() {
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.phone = null;
      this.accept = false;
    }
  }
};
</script>