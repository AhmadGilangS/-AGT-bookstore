<template>
  <q-page>
    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 350px; width:100%">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <img src="@/assets/logo2.png" style="width:300px; height:200" />
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
            <q-btn label="Login" type="submit" color="primary" />
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
import login from "../../../api/login/index";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      roles: ""
    };
  },

  methods: {
    onSubmit() {
      let self = this;

      login
        .getUserByEmailAndPassword(window, self.email, self.password)
        .then(function(result) {
          console.log(result);
          if (!result) {
            self.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "fas fa-exclamation-triangle",
              message: "wrong password or email, please try again!"
            });
          } else {
            self.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "fas fa-check-circle",
              message: "you are logged!"
            });
            console.log(result.roles);
            if (result.roles == "owner") {
              self.$router.push("/owner");
            } else if (result.roles == "admin") {
              self.$router.push("/admin");
            } else {
              self.$router.push("/catalog");
            }
          }
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    onReset() {
      this.email = null;
      this.password = null;
    }
  }
};
</script>

