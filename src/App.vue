<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <Navbar />
    <div class="grow">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
