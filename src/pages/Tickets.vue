<template>
  <section class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-blue-700">Manage Tickets</h1>
      <RouterLink
        to="/dashboard"
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md"
      >
        ← Back to Dashboard
      </RouterLink>
    </div>

    <!-- Add Ticket Form -->
    <form @submit.prevent="addTicket" class="bg-white p-6 rounded-xl shadow-md mb-8">
      <div class="grid md:grid-cols-3 gap-4">
        <input
          v-model="newTicket.title"
          type="text"
          placeholder="Ticket Title"
          class="border border-gray-300 rounded-md p-2 w-full"
          required
        />
        <input
          v-model="newTicket.description"
          type="text"
          placeholder="Ticket Description"
          class="border border-gray-300 rounded-md p-2 w-full"
          required
        />
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
        >
          Add Ticket
        </button>
      </div>
    </form>

    <!-- Ticket List -->
    <div v-if="tickets.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="ticket in tickets"
        :key="ticket.id"
        class="bg-white rounded-xl shadow-md p-5 border border-blue-100 relative"
      >
        <!-- Ticket Header -->
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-semibold text-blue-700">{{ ticket.title }}</h2>
          <span
            :class="{
              'text-green-600': ticket.status === 'Closed',
              'text-yellow-600': ticket.status === 'In Progress',
              'text-blue-600': ticket.status === 'Open',
            }"
            class="text-sm font-bold"
          >
            {{ ticket.status }}
          </span>
        </div>

        <!-- Ticket Description -->
        <p class="text-gray-700 mb-4">{{ ticket.description }}</p>

        <!-- Ticket Buttons -->
        <div class="flex justify-between items-center text-sm">
          <select
            v-model="ticket.status"
            @change="updateTicket(ticket)"
            class="border border-gray-300 rounded-md px-2 py-1"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>

          <div class="flex gap-2">
            <button
              @click="editTicket(ticket)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              @click="deleteTicket(ticket.id)"
              class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-gray-500 mt-10">No tickets yet. Add one above 👆</p>

    <!-- Edit Modal -->
    <div
      v-if="editingTicket"
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
        <h3 class="text-xl font-semibold mb-4 text-blue-700">Edit Ticket</h3>
        <input
          v-model="editingTicket.title"
          type="text"
          placeholder="Title"
          class="border border-gray-300 rounded-md p-2 w-full mb-3"
        />
        <textarea
          v-model="editingTicket.description"
          placeholder="Description"
          class="border border-gray-300 rounded-md p-2 w-full mb-3"
          rows="3"
        ></textarea>

        <div class="flex justify-end gap-3">
          <button
            @click="cancelEdit"
            class="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            @click="saveEdit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Reactive state
const tickets = ref([])
const newTicket = ref({ title: '', description: '', status: 'Open' })
const editingTicket = ref(null)

// Load tickets from localStorage on mount
onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('tickets_vue') || '[]')
  tickets.value = stored
})

// Persist tickets to localStorage whenever they change
watch(
  tickets,
  (val) => {
    localStorage.setItem('tickets_vue', JSON.stringify(val))
  },
  { deep: true },
)

// Add Ticket
function addTicket() {
  if (!newTicket.value.title || !newTicket.value.description) return alert('Please fill all fields')

  const ticket = {
    id: Date.now(),
    title: newTicket.value.title,
    description: newTicket.value.description,
    status: 'Open',
  }

  tickets.value.push(ticket)
  newTicket.value = { title: '', description: '', status: 'Open' }
}

// Update Ticket (status)
function updateTicket(ticket) {
  const index = tickets.value.findIndex((t) => t.id === ticket.id)
  if (index !== -1) tickets.value[index] = { ...ticket }
}

// Delete Ticket
function deleteTicket(id) {
  if (confirm('Are you sure you want to delete this ticket?')) {
    tickets.value = tickets.value.filter((t) => t.id !== id)
  }
}

// Edit Ticket
function editTicket(ticket) {
  editingTicket.value = { ...ticket }
}

// Cancel Edit
function cancelEdit() {
  editingTicket.value = null
}

// Save Edit
function saveEdit() {
  const index = tickets.value.findIndex((t) => t.id === editingTicket.value.id)
  if (index !== -1) tickets.value[index] = { ...editingTicket.value }
  editingTicket.value = null
}
</script>

<style scoped>
select {
  cursor: pointer;
}
</style>
