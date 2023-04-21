<script setup lang="ts">
import { auth } from '../firebase'
import { RouterLink } from 'vue-router'

</script>

<template>
<nav>
  <div class = "nav_barTOP" key=App.>
    <div class = "page_title">
      <RouterLink to="/" class = "home_Link" >GW2 Assistant</RouterLink>
    </div>
    <div v-if="!isLogged" class="nav_acc_info">
      <p>Welcome guest</p>
      <RouterLink to="/login" class="lrnav">Login</RouterLink>
      <RouterLink to="/register" class="lrnav">Create Account</RouterLink>
    </div>
    <div class="nav_acc_info" v-else> 
      <p>Welcome, {{auth.currentUser?.email}}</p>
      <RouterLink to="/accinfo"><div>Account</div></RouterLink>
      <RouterLink @click.prevent="logoutNaV" to="/login">Logout</RouterLink>
      
      <!-- <button @click="logoutNaV">Logout</button> -->
    </div>
  </div>
  <div class = "nav_barBOTTOM">
    <RouterLink to="/crafting" class="L_body_elem">Crafting</RouterLink>
  </div>
</nav>
  </template>

  <script lang="ts">

  import App from '../App.vue'

    export default {
      methods:{
        logoutNaV(){
          auth.signOut();
          this.$emit('LOGOUT');
        }
      },
      emits: ['LOGOUT'],
      props:{
        isLogged: Boolean
      }
    }
  </script>

<style scoped src="./nav.css">
</style>

