<script setup lang="ts">
import { auth } from '../firebase'
import { RouterLink } from 'vue-router'

</script>

<template>
<div class = "nav_bar" key=App.>
    <div class = "page_title">
      <RouterLink to="/"><img src="https://fontmeme.com/permalink/230403/7dbbbbca39b455368c8a7915a5b8e418.png" alt="guild-wars-2-font" border="0"></RouterLink>
    </div>
    <div v-if="auth.currentUser==null">
      <p>Welcome guest</p>

    </div>
    <div v-else>
      <p>Welcome, {{auth.currentUser.email}}</p>
      <RouterLink @click="logoutNaV" to="/login">Logout</RouterLink>
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
          App.methods?.logOut();
        }
      },
      emits: ['LOGOUT']
    }
  </script>
