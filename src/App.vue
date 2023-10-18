<script setup>
import SoalA from './components/SoalA.vue';
</script>

<template>
  <nav>
    <router-link to="/">Soal A</router-link> |
    <router-link to="/soalb">Soal B</router-link> |
  </nav>
  <main>
    <router-view />
  </main>
</template>
