<template>
  <section class="relative min-h-screen overflow-hidden bg-blue-50 text-center flex flex-col justify-center py-20">
    <div class="max-w-screen-md mx-auto px-6 z-10">
      <h1 class="text-4xl font-bold mb-4 text-blue-700">
        Manage Tickets with Ease
      </h1>
      <p class="text-gray-600 mb-6">
        A powerful, simple ticket system built with modern frontend frameworks.
      </p>
      <div class="flex justify-center gap-4">
        <RouterLink
          to="/auth/login"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/auth/signup"
          class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Get Started
        </RouterLink>
      </div>
    </div>

    <!-- Decorative Circle -->
    <div
      class="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60"
    ></div>

    <!-- Hero Wave -->
    <img
      src="/src/assets/wave.svg"
      alt="wave"
      class="absolute bottom-0 left-0 w-full pointer-events-none"
    />
  </section>
</template>
