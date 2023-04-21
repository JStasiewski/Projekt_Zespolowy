<script setup lang="ts">
import { RouterView } from 'vue-router'
import { database } from './firebase'
import { collection , addDoc } from 'firebase/firestore'
import Nav_bar from './views/Nav_bar.vue';
import { VueFire } from 'vuefire';
</script>



<template>
  <Nav_bar :isLogged = "IsLoggedIn" @lOGOUT="logOut"/>
  <RouterView @updateNav="logIn" :ApiKey = "UserApiKey"/>
</template>

<style scoped>
@import './views/nav.css';
</style>

<script lang="ts">

export default {
  methods: {
    async createUser(email_n:string, nname: string){
      const collectRef = collection(database,'Users')
    },
    logOut(){
      console.log(this.IsLoggedIn);
      this.IsLoggedIn = false;
      console.log(this.IsLoggedIn);
    },
    logIn(){
      console.log(this.IsLoggedIn);
      this.IsLoggedIn = true;
      console.log(this.IsLoggedIn);
    },
    getIsLoggedIn(): boolean{
      return this.IsLoggedIn;
    }
  },
  data() {
    return{
      IsLoggedIn: false,
      UserApiKey: "",
    };
  }
}

</script>
<!-- Z tego rozszerzenia łatwiej będzie operwać firebase -->
<!-- https://vuefire.vuejs.org/guide/realtime-data.html -->
