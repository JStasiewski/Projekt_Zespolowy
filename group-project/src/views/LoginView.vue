<script setup lang="ts"></script>

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
    login() {
      // perform login logic here
      //console.log(this.email + ' ' + this.password)
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
