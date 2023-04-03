<script setup lang="ts">
import {auth} from '../firebase'
import {} from '../App.vue'
</script>

<template>
  <div class = "nav_bar" >
    <div class = "page_title">
      <RouterLink to="/"><img src="https://fontmeme.com/permalink/230403/7dbbbbca39b455368c8a7915a5b8e418.png" alt="guild-wars-2-font" border="0"></RouterLink>
    </div>
    <div v-if="auth.currentUser==null">
      <p>Welcome guest</p>

    </div>
    <div v-else>
      <p>Welcome, {{auth.currentUser.email}}</p>
      <button @click="auth.signOut">Logout</button>
    </div>
  </div>

  
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
