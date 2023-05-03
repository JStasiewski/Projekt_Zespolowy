<script setup lang="ts">
import { RouterView } from 'vue-router'
import { auth, getUserApiK , addUser } from './firebase'
import { collection , addDoc } from 'firebase/firestore'
import Nav_bar from './views/Nav_bar.vue'
import { getDatabase, ref, set } from "firebase/database"
import axios from "axios"



</script>



<template>
  <Nav_bar :isLogged = "IsLoggedIn" @lOGOUT="logOut"/>
  <RouterView :isLogged = "IsLoggedIn" @updateNav="logIn"  :ApiKey = "UserApiKey"  @swapApi="SetUserAPI"/>
</template>

<style scoped>
@import './views/nav.css';
</style>

<script lang="ts">

export default {
  methods: {
    async SetUserAPI(newApiKey:string){
      if (auth.currentUser?.uid){
        if(newApiKey === "!"){
          await addUser("",auth.currentUser?.uid);
        }
        else if( await this.isFalideApiK(newApiKey)){
          await addUser(newApiKey,auth.currentUser?.uid);
        }
        if(auth.currentUser?.uid)
        this.UserApiKey = await getUserApiK(auth.currentUser?.uid);
      }else{
        console.log("api key not haha")
      }
      console.log("End of set API")
      // const db = getDatabase()
      // set(ref(db, "users/" + auth.currentUser?.uid ),{
      //   apik: newApiKey
      // })
    },
    logOut(){
      console.log(this.IsLoggedIn);
      this.IsLoggedIn = false;
      console.log(this.IsLoggedIn);
    },
    async logIn(){
      let pom;
      console.log(this.IsLoggedIn);
      this.IsLoggedIn = true;
      if(auth.currentUser?.uid)
        this.UserApiKey = await getUserApiK(auth.currentUser?.uid)
      console.log(this.IsLoggedIn);
    },
    getIsLoggedIn(): boolean{
      return this.IsLoggedIn;
    },
    async isFalideApiK(newApiKey:String){
      let resp;
      try{
        resp = await axios.get('https://api.guildwars2.com/v2/account?access_token=' + newApiKey)
        return true;
      }catch (error){
        return false;
      }
      
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
