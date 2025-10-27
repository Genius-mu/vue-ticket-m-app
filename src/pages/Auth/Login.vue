<template>
  <section class="flex flex-col items-center justify-center min-h-[80vh] px-4">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>

    <form @submit.prevent="handleLogin" class="bg-white shadow p-6 rounded-lg w-full max-w-sm">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full border rounded-md p-2 mb-3"
        required
      />

      <div class="relative mb-3">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          class="w-full border rounded-md p-2 pr-10"
          required
        />
        <span
          @click="showPassword = !showPassword"
          class="absolute right-3 top-2 cursor-pointer text-gray-500"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </span>
      </div>

      <button type="submit" class="bg-blue-600 w-full py-2 text-white rounded-lg hover:bg-blue-700">
        Login
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const { login } = useAuth();

function handleLogin() {
  const result = login(email.value, password.value);
  if (!result.success) alert(result.message);
}
</script>
