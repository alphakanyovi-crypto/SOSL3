<template>
  <div class="min-h-screen bg-gray-100">

    <nav class="bg-blue-900 text-white p-4 flex justify-center gap-6">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>