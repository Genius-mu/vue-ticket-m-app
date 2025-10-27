// src/composables/useTickets.js
import { ref, watch } from 'vue'

// ✅ Define global shared state (outside the function)
const tickets = ref(JSON.parse(localStorage.getItem('tickets_vue')) || [])

// ✅ Persist to localStorage automatically
watch(
  tickets,
  (val) => {
    localStorage.setItem('tickets_vue', JSON.stringify(val))
  },
  { deep: true },
)

export function useTickets() {
  const createTicket = (ticket) => {
    tickets.value.push({ id: Date.now(), ...ticket })
  }

  const updateTicket = (id, data) => {
    const index = tickets.value.findIndex((t) => t.id === id)
    if (index !== -1) {
      tickets.value[index] = { ...tickets.value[index], ...data }
    }
  }

  const deleteTicket = (id) => {
    tickets.value = tickets.value.filter((t) => t.id !== id)
  }

  return { tickets, createTicket, updateTicket, deleteTicket }
}
