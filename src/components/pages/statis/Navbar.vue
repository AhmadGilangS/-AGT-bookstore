<template>
  <q-toolbar class="nav-margin bg-nav-custom text-black q-my-md shadow-2" style="margin-top:-1px; ">
    <router-link to="/">

    <q-avatar rounded size="50px" color="#FFeb3b">AGT Book</q-avatar>
    </router-link>
    <q-space />

    <div class="button">
      <q-btn-dropdown stretch flat label icon="person" class="right font-black">
        <q-list>
          <q-separator inset spaced />
          <q-item-label header class="font-black">Have Account</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <router-link to="/login">
                <q-item-label class="font-black">Login</q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
          <q-separator inset spaced />

          <q-item-label header class="font-black">Not Registered</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <router-link to="/register">
                <q-item-label class="font-black">Register</q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn stretch flat icon="shopping_cart" label="2 items" class="font-black right"></q-btn>
    </div>

    <!-- <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-separator dark vertical />
    <q-btn stretch flat label="Link" />-->
  </q-toolbar>
</template>
<style>
.button {
  width: 100%;
}
.left {
  float: left;
  display: block;
}
.right {
  float: right;
  display: block;
}
.button ul a {
  padding: 10px;
  background: rgb(116, 181, 12);
  color: white;
}
.bg-nav-custom {
  background: #ffeb3b;
  height: 70px;
}

.font-black {
  color: black;
}
</style>

<script>
</script>


