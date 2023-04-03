<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
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
      <p>Welcome, {{auth.currentUser.email + renterCount}}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>

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
      renterCount: ""
    }
  },
  methods: {
    async logout() {
      await auth.signOut()
      this.renterCount = " "
    },
    async login() {
      // perform login logic here
      //console.log(this.email + ' ' + this.password)
      await signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Sign-out successful.
          console.log('SUCCES!!!')
          this.$router.push('/crafting')
        })
        .catch((error) => {
          console.log('ERROR!!!') // An error happened.
        })
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
