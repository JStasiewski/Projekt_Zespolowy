<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
</script>

<template>

  <form class="reg_body">
    <label class="reg_elem">
      Name:
      <input type="text" v-model="name" required />
    </label>

    <label class="reg_elem">
      Email:
      <input type="email" v-model="email" required />
    </label>

    <label class="reg_elem">
      Password:
      <input type="password" v-model="password" required />
    </label>

    <button type="submit" class="reg_elem" @click.prevent="register">Register</button>
  </form>
  <div class="reg_elem_" style="align-items: center;">
  <span>Already have an account? </span>
  <RouterLink to="/login">Login here!</RouterLink>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      renterCount: ''
    }
  },
  methods: {
    async register() {
      // perform registration logic here
      //console.log(this.name + ' ' + this.email)
      const res = await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(( ) => {
          // Sign-out successful.
          console.log('SUCCES!!!')
          this.$emit('NEWUSER',this.email)
          this.$router.push('/')
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

.reg_body{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reg_elem_{
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reg_elem{
  margin-top: 25px;
}
</style>
