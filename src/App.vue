<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav/Navigation.vue'
</script>

<template>
  <main class="main">
    <header class="header">
      <Nav />
    </header>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
  .main {
    font-size: 16px;
  }
  .header {
    position: relative;
    text-align: center;
    @media (min-width: 1024px) { 
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    
      .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }
    }
  }
</style>