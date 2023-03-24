<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>This is an Home page</h1>
    <RouterLink to="login">Login</RouterLink>
    <RouterLink to="/game">Game</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
