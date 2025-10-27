<template>
  <nav class="flex justify-between items-center p-4 bg-white shadow">
    <h1 class="text-xl font-bold text-blue-600">TicketApp</h1>
    <div class="flex gap-4">
      <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
      <RouterLink to="/auth/login" class="hover:text-blue-600">Login</RouterLink>
      <RouterLink to="/auth/signup" class="hover:text-blue-600">Signup</RouterLink>
    </div>
  </nav>
</template>
