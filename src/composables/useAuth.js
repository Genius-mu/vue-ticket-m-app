// src/composables/useAuth.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()
  const isAuthenticated = ref(!!localStorage.getItem('ticketapp_session'))

  // ✅ Signup - save user
  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')

    if (users.some((u) => u.email === email)) {
      return { success: false, message: 'Email already registered' }
    }

    users.push({ email, password })
    localStorage.setItem('ticketapp_users', JSON.stringify(users))

    localStorage.setItem('ticketapp_session', email)
    isAuthenticated.value = true
    router.push('/dashboard')
    return { success: true }
  }

  // ✅ Login - verify user
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (!foundUser) {
      return { success: false, message: 'Invalid credentials' }
    }

    localStorage.setItem('ticketapp_session', email)
    isAuthenticated.value = true
    router.push('/dashboard')
    return { success: true }
  }

  // ✅ Logout
  function logout() {
    localStorage.removeItem('ticketapp_session')
    isAuthenticated.value = false
    router.push('/auth/login')
  }

  return { isAuthenticated, login, signup, logout }
}
