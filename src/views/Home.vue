<script setup>
import { ref, onMounted } from 'vue'

import heroImage from '../assets/gee.jpg'
import lake from '../assets/lake.jpg'
import gorilla from '../assets/gorilla.jpg'
import kigali from '../assets/kigali.jpg'
import video from '../assets/rwanda.mp4'
const videoRef = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // autoplay when video section is visible
          videoRef.value?.play()
        }
      })
    },
    {
      threshold: 0.5 // 50% visible
    }
  )
  if (videoRef.value) {
    observer.observe(videoRef.value)
  }
})
</script>
<template>
  <!-- HERO SECTION -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Welcome to Rwanda
      </h1>
      <p class="text-xl text-green-300 mb-8">
        The Land of a Thousand Hills
      </p>
      <div class="flex gap-4 justify-center">
        <button class="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700">
          Explore
        </button>
        <button class="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
          Learn More
        </button>
      </div>
    </div>
  </section>
  <!-- ABOUT RWANDA -->
  <section class="py-16 px-8 bg-gray-100 text-center">
    <h2 class="text-4xl font-bold text-green-700 mb-6">
      Discover Rwanda
    </h2>
    <p class="max-w-3xl mx-auto text-gray-700 text-lg">
      Rwanda is one of Africa’s most beautiful destinations known for
      mountain gorillas, beautiful lakes, clean cities, and amazing culture.
    </p>
  </section>
  <!-- TOURIST DESTINATIONS -->
  <section class="py-16 px-8">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
      Top Destinations
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img :src="gorilla" class="h-60 w-full object-cover" />
        <div class="p-5">
          <h3 class="text-2xl font-bold mb-3">Volcanoes National Park</h3>
          <p class="text-gray-600">
            Experience mountain gorilla trekking in Rwanda’s famous national park.
          </p>
        </div>
      </div>
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img :src="lake" class="h-60 w-full object-cover" />
        <div class="p-5">
          <h3 class="text-2xl font-bold mb-3">Lake Kivu</h3>
          <p class="text-gray-600">
            Relax and enjoy beautiful beaches and peaceful views.
          </p>
        </div>
      </div>
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <img :src="kigali" class="h-60 w-full object-cover" />
        <div class="p-5">
          <h3 class="text-2xl font-bold mb-3">Kigali City</h3>
          <p class="text-gray-600">
            Explore one of Africa’s cleanest and safest cities.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- VIDEO SECTION (AUTOPLAY ON SCROLL) -->
  <section class="py-16 bg-gray-100 px-8 text-center">
    <h2 class="text-4xl font-bold text-green-700 mb-8">
      Explore Rwanda Video
    </h2>
    <div class="max-w-4xl mx-auto">
      <video
        ref="videoRef"
        controls
        muted
        class="rounded-xl shadow-lg w-full"
      >
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </section>
</template>