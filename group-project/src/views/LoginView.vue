<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Nav_bar from './Nav_bar.vue';
import App from '../App.vue'
</script>

<template>

  <!-- <Nav_bar/> -->

 <div class="login_body">
    <label class="login_elem">
      Email:
      <input type="email" v-model="email" required />
    </label>

    <label class="login_elem">
      Password:
      <input type="password" v-model="password" required />
    </label>

    <button type="submit" class="login_elem" @click.prevent="login">Login</button>
    <div class="login_elem">
      <span>Don't have account yet? </span>
      <RouterLink to="/register">Register here!</RouterLink>
    </div>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
      renterCount: "",
      suc: false,
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
      this.renterCount = " "
    },
    sendEmit(){
      this.$emit("updateNav")
    },
    async login() {
      // perform login logic here
      //console.log(this.email + ' ' + this.password)
      await signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Sign-out successful.
          console.log('SUCCES!!!')
          this.suc = true;
          //App.methods?.logIn()
        })
        .catch((error) => {
          console.log('ERROR!!!') // An error happened.
        })
        if(this.suc){
          this.sendEmit()
          await this.$nextTick()
          this.$router.push('/')
        }
    }
  }
}
</script>

<style>

@import './nav.css';

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.login_body{
  display: flex;
  flex-direction:column ;
  align-items: center;
}

.login_elem{
flex: 1;
margin-top: 25px;
}
</style>
