<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('HomeView:', )
}) 

</script>

<template>
    <section class="content">
        <h1>Javascript Vue3.js Tutorial</h1>
        <!--
          1. Authenticate via Facebook
             Registration on the application
          2. Routes back to home page ('/') with dynamic URL of logged in user
          3. Edit account ('account/:id') edit account details on app only 
              Can decide which fields e.g. nickname is editable
        -->
        <button id="fb-cta">Signin with Facebook</button>
    </section>
</template>

<style scoped>
button {
  cursor: pointer;
  padding: 5px 10px;
  text-transform: uppercase;
}
</style>