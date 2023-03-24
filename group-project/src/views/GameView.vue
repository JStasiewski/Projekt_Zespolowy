<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>This is an Game page</h1>
    <RouterLink to="/">Home</RouterLink>
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
