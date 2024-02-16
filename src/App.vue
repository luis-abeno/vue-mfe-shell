<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
</script>

<template>
  <TopNavbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
.container {
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
</style>
