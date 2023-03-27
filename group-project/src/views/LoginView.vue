<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
</script>

<template>
  <form>
    <label>
      Email:
      <input type="email" v-model="email" required />
    </label>

    <label>
      Password:
      <input type="password" v-model="password" required />
    </label>

    <button type="submit" @click.prevent="login">Login</button>
  </form>
  <span>Don't have account yet? </span>
  <RouterLink to="/register">Register here!</RouterLink>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // perform login logic here
      //console.log(this.email + ' ' + this.password)
      const res = await signInWithEmailAndPassword(auth, this.email, this.password)
      console.log(res.user)
      if (1) this.$router.push('/') // TO DO WARUNEK ZE KLIENT POPRAWNIE SIE ZALOGOWAL
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
