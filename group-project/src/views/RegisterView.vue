<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
</script>

<template>
  <form>
    <label>
      Name:
      <input type="text" v-model="name" required />
    </label>

    <label>
      Email:
      <input type="email" v-model="email" required />
    </label>

    <label>
      Password:
      <input type="password" v-model="password" required />
    </label>

    <button type="submit" @click.prevent="register">Register</button>
  </form>
  <span>Already have an account? </span>
  <RouterLink to="/login">Login here!</RouterLink>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      // perform registration logic here
      //console.log(this.name + ' ' + this.email)
      const res = await createUserWithEmailAndPassword(auth, this.email, this.password)
      console.log(res.user)
      if (1) this.$router.push('/') // TO DO WARUNEK ZE KLIENT POPRAWNIE SIE ZAREJESTROWAL
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
