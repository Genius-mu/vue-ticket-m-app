<template>
  <nav class="flex justify-between items-center p-4 bg-white shadow relative">
    <!-- Logo -->
    <h1 class="text-xl font-bold text-blue-600">TicketApp</h1>

    <!-- Desktop Links -->
    <div class="hidden md:flex gap-4">
      <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
      <RouterLink to="/auth/login" class="hover:text-blue-600">Login</RouterLink>
      <RouterLink to="/auth/signup" class="hover:text-blue-600">Signup</RouterLink>
    </div>

    <!-- Hamburger Button (Mobile) -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none z-20">
      <svg
        v-if="!isOpen"
        class="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="absolute top-full right-0 mt-2 w-40 bg-white shadow-md rounded-md flex flex-col md:hidden z-10"
    >
      <RouterLink @click="isOpen = false" to="/" class="px-4 py-2 hover:bg-blue-100">Home</RouterLink>
      <RouterLink @click="isOpen = false" to="/auth/login" class="px-4 py-2 hover:bg-blue-100">Login</RouterLink>
      <RouterLink @click="isOpen = false" to="/auth/signup" class="px-4 py-2 hover:bg-blue-100">Signup</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>
