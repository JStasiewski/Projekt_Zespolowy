<script setup lang="ts">
import { RouterView } from 'vue-router'
import { database } from './firebase'
import { auth } from './firebase'
import { collection , addDoc } from 'firebase/firestore'
import LoginView from './views/LoginView.vue';
import router from './router';
import Nav_bar from './views/Nav_bar.vue';
import { getCurrentInstance } from 'vue';

</script>



<template>
  <RouterView />
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
        this.IsLoggedIn = 0;
        console.log(this.IsLoggedIn);
      },
    logIn(){
      console.log(this.IsLoggedIn);
      this.IsLoggedIn = 1;
      console.log(this.IsLoggedIn);

    },
    getIsLoggedIn(): number{

      return this.IsLoggedIn;
    }
  },
  data() {
    return{
      IsLoggedIn: 0,
    };
  }
}

</script>