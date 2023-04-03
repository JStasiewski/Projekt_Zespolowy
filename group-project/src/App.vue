<script setup lang="ts">
import { RouterView } from 'vue-router'
import { database } from './firebase'
import { auth } from './firebase'
import { collection , addDoc } from 'firebase/firestore'
</script>



<template>
  <RouterView />
</template>

<style scoped>
@import './views/nav.css';
</style>

<script lang="ts">
export default{
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
  },
  data() {
    return{
      IsLoggedIn: true
    };
  }
}

</script>