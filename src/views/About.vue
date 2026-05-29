<script setup>
import aboutImage from '../assets/about.jpg'
import culture from '../assets/culture.jpg'
import nature from '../assets/nature.jpg'
import tourism from '../assets/tourism.jpg'
</script>
<template>
  <!-- HERO SECTION -->
  <section
    class="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${aboutImage})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        About Rwanda
      </h1>
      <p class="text-xl text-green-300">
        Discover the beauty, culture, and history of Rwanda
      </p>
    </div>
  </section>
  <!-- ABOUT CONTENT -->
  <section class="py-16 px-8 bg-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 class="text-4xl font-bold text-green-700 mb-6">
          The Land of a Thousand Hills
        </h2>
        <p class="text-gray-700 text-lg mb-4">
          Rwanda is one of Africa’s most beautiful and fastest-growing tourism destinations.
          It is famous for its breathtaking hills, mountain gorillas, clean cities,
          peaceful environment, and rich culture.
        </p>
        <p class="text-gray-700 text-lg">
          Visitors enjoy national parks, lakes, cultural experiences,
          wildlife adventures, and warm hospitality from the people of Rwanda.
        </p>
      </div>
      <div>
        <img
          :src="tourism"
          class="rounded-2xl shadow-xl w-full"
        />
      </div>
    </div>
  </section>
  <!-- FEATURES -->
  <section class="py-16 bg-gray-100 px-8">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
      Why Visit Rwanda?
    </h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- CARD 1 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img :src="nature" class="h-56 w-full object-cover" />
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-3">
            Beautiful Nature
          </h3>
          <p class="text-gray-600">
            Enjoy mountains, lakes, forests, and amazing landscapes across Rwanda.
          </p>
        </div>
      </div>
      <!-- CARD 2 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img :src="culture" class="h-56 w-full object-cover" />
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-3">
            Rich Culture
          </h3>
          <p class="text-gray-600">
            Experience traditional dances, local food, art, and Rwandan hospitality.
          </p>
        </div>
      </div>
      <!-- CARD 3 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
        <img :src="tourism" class="h-56 w-full object-cover" />
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-3">
            Tourism Adventures
          </h3>
          <p class="text-gray-600">
            Explore gorilla trekking, safaris, hiking, and unforgettable adventures.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- STATISTICS -->
  <section class="py-16 bg-green-700 text-white">
    <div class="grid md:grid-cols-3 text-center gap-8 max-w-6xl mx-auto">
      <div>
        <h2 class="text-5xl font-bold mb-2">
          4+
        </h2>
        <p class="text-xl">
          National Parks
        </p>
      </div>
      <div>
        <h2 class="text-5xl font-bold mb-2">
          100+
        </h2>
        <p class="text-xl">
          Tourist Attractions
        </p>
      </div>
      <div>
        <h2 class="text-5xl font-bold mb-2">
          1M+
        </h2>
        <p class="text-xl">
          Visitors Every Year
        </p>
      </div>
    </div>
  </section>
</template>