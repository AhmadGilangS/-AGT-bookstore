<template>
    <q-toolbar class="bg-primary text-white q-my-md shadow-2" style="margin-top:-1px;">
   
      <q-btn stretch flat label="AGT BOOK" />

      <q-space />
       <div class="button">
      <q-btn-dropdown stretch flat label="" icon="person" class="right">
        <q-list>
          <q-item-label header>Have Account</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
      
            <q-item-section>
              <q-item-label>Login</q-item-label> 
              
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>

          <q-separator inset spaced />
          <q-item-label header>Not Registered</q-item-label>
          <q-item clickable v-close-popup tabindex="0"> 
            <q-item-section>
              <q-item-label>Register</q-item-label> 
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      </div>


      <!-- <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" /> -->
      
    </q-toolbar>

</template>
    
     
 
<style>

 .button{
    width: 100%;
  }
  .left{
    float: left;
    display: block;
  }
  .right{
    float: right;
    display: block;
  }
.button ul a{
  padding: 10px;
  background: rgb(116, 181, 12);
  color: white;
}

</style>

<script> 
</script>


