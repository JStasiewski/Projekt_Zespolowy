<script setup lang="ts">
import {auth} from '../firebase'
import {} from '../App.vue'
import Nav_bar from './Nav_bar.vue'
</script>

<template>

<Nav_bar/>
  
<div class="Home_body">
  <div v-if="auth.currentUser==null" class="Home_body_L">
    <RouterLink to="/login" class="L_body_elem">Login</RouterLink>
    <RouterLink to="/register" class="L_body_elem">Create Account</RouterLink>
  </div>
  <div v-else class="Home_body_L" >
    <RouterLink to="/crafting" class="L_body_elem">Crafting</RouterLink>
  </div>

  <div class="Home_body_R">
      Some image
  </div>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      renterCount: ''
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
      this.renterCount = " "
    }
  }
}
    
</script>

<style>
 @import './nav.css';
.L_body_elem{
  color: black;
  width: auto;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 15px;
  font-family:  "Papyrus";
  text-decoration: none;
}

.L_body_elem:hover{
  color: rgb(109, 0, 0);
}

.L_body_elem:active{
  color: rgb(167, 1, 1);
}


 .Home_body{
  display: flex;
  flex-direction: row;
}

.Home_body_L{
  height: auto;
  display: flex;
  flex-direction: column;
  height:fit-content;
  flex: 1;
}

.Home_body_R{
  height: auto;
  display: flex;
  flex-direction: column;
  flex: 7;
}


</style>
