<script setup lang="ts">
import { auth } from '../firebase'
import { RouterLink } from 'vue-router'

</script>

<template>
<div class = "nav_bar" key=App.>
    <div class = "page_title">
      <RouterLink to="/"><img src="https://fontmeme.com/permalink/230403/7dbbbbca39b455368c8a7915a5b8e418.png" alt="guild-wars-2-font" border="0"></RouterLink>
    </div>
    <div v-if="!isLogged" class="nav_acc_info">
      <p>Welcome guest</p>

    </div>
    <div class="nav_acc_info" v-else> 
      <p>Welcome, {{auth.currentUser?.email}}</p>
      <RouterLink @click.prevent="logoutNaV" to="/login">Logout</RouterLink>
      <!-- <button @click="logoutNaV">Logout</button> -->
    </div>
  </div>
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
