<template>
  <section class="flex flex-col items-center justify-center min-h-[80vh] px-4">
    <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>

    <form @submit.prevent="handleSignup" class="bg-white shadow p-6 rounded-lg w-full max-w-sm">
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

      <div class="relative mb-3">
        <input
          :type="showConfirm ? 'text' : 'password'"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          class="w-full border rounded-md p-2 pr-10"
          required
        />
        <span
          @click="showConfirm = !showConfirm"
          class="absolute right-3 top-2 cursor-pointer text-gray-500"
        >
          {{ showConfirm ? 'Hide' : 'Show' }}
        </span>
      </div>

      <button type="submit" class="bg-blue-600 w-full py-2 text-white rounded-lg hover:bg-blue-700">
        Sign Up
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { validateForm } from "@/utils/validateForm";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirm = ref(false);

const { signup } = useAuth();

function handleSignup() {
  const validation = validateForm(email.value, password.value, confirmPassword.value);
  if (!validation.success) return alert(validation.message);

  const result = signup(email.value, password.value);
  if (!result.success) alert(result.message);
}
</script>
