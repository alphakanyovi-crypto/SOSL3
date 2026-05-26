<template>
  <div class="max-w-6xl mx-auto px-6 py-10">

    <div class="grid md:grid-cols-2 gap-10">

      <div class="bg-white rounded-3xl shadow-lg p-10">

        <h1 class="text-5xl font-bold text-blue-900 mb-8">
          Contact Us
        </h1>

        <div class="space-y-5 text-lg">
          <p><strong>School:</strong> SOS Technical High School Rwanda</p>
          <p><strong>Location:</strong> Kigali, Rwanda</p>
          <p><strong>Email:</strong> info@sosrwanda.com</p>
          <p><strong>Phone:</strong> +250 788 000 000</p>
        </div>

      </div>

      <Login />

    </div>

  </div>
</template>

<script>
import Login from '../components/ui/Login.vue'

export default {
  components: {
    Login
  }
}
</script>