<template>
  <section class="px-6 py-10 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-blue-700">Ticket Dashboard</h1>
      <button @click="logout" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
        Logout
      </button>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl shadow-md p-4 text-center border border-blue-100">
        <h3 class="text-gray-600">Total</h3>
        <p class="text-2xl font-bold text-blue-700">{{ total }}</p>
      </div>
      <div class="bg-white rounded-xl shadow-md p-4 text-center border border-blue-100">
        <h3 class="text-gray-600">Open</h3>
        <p class="text-2xl font-bold text-blue-700">{{ openCount }}</p>
      </div>
      <div class="bg-white rounded-xl shadow-md p-4 text-center border border-blue-100">
        <h3 class="text-gray-600">In Progress</h3>
        <p class="text-2xl font-bold text-blue-700">{{ progressCount }}</p>
      </div>
      <div class="bg-white rounded-xl shadow-md p-4 text-center border border-blue-100">
        <h3 class="text-gray-600">Closed</h3>
        <p class="text-2xl font-bold text-blue-700">{{ closedCount }}</p>
      </div>
    </div>

    <RouterLink
      to="/tickets"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md"
    >
      Go to Tickets Page →
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useTickets } from '@/composables/useTickets'

const { logout } = useAuth()
const { tickets } = useTickets()

const total = computed(() => tickets.value.length)
const openCount = computed(() => tickets.value.filter((t) => t.status === 'Open').length)
const progressCount = computed(() => tickets.value.filter((t) => t.status === 'In Progress').length)
const closedCount = computed(() => tickets.value.filter((t) => t.status === 'Closed').length)
</script>
