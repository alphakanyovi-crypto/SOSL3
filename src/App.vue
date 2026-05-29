
<script setup>
import Home from './views/Home.vue';
import{ RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Navbar/>
  <RouterView/>
  <!--<home/>-->
  <Footer/>
</template>
  