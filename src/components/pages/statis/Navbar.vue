<template>

  <q-toolbar class="nav-margin bg-nav-custom text-black q-my-md shadow-2" style="margin-top:-1px; ">
    <router-link class="a" to="/">
      <q-btn stretch flat   >
        <div size="50px"> 
         <img src="@/assets/new-agt.png" style="width: 80px; height: 40px;">
        </div>
      </q-btn>
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
                <q-item-label class="font-black">Registers</q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <router-link class="a" to="/catalog">
      <q-btn stretch flat label="Catalog" class="font-black-weight right"></q-btn>
      </router-link>
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
      background:#fff649; /* #ffe470;  #ffeb3b; */
      height: 70px;
    }

    .font-black {
      color: black;
    }


    .a{
      color: black;
    }


</style>

<script>
</script>


