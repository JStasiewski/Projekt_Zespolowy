<script setup lang="ts">
import { RouterView } from 'vue-router'
import { database } from './firebase'
import { collection , addDoc } from 'firebase/firestore'
import Nav_bar from './views/Nav_bar.vue';

</script>



<template>
  <Nav_bar :isLogged = "IsLoggedIn" @lOGOUT="logOut"/>
  <RouterView @updateNav="logIn"/>
</template>

<style scoped>
@import './views/nav.css';
</style>

<script lang="ts">

export default {
  methods: {
    async createUser(email_n:string, nname: string){
        const collectRef = collection(database,'Users')
        const data = {
          email: email_n,
          name: nname
        }
        // dodawanie do bazy

        const ref = await addDoc(collectRef, data)
        console.log(" ref ",ref.id)
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
    forceRefresh(){

    },
    getIsLoggedIn(): boolean{
      
      return this.IsLoggedIn;
    }
  },
  data() {
    return{
      IsLoggedIn: false,
    };
  }
}

</script>