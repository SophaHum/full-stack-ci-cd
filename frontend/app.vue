<template>
  <div>
    <UContainer>
      <nav class="flex items-center justify-between p-4 border-b">
        <NuxtLink to="/" class="text-xl font-bold">Full Stack App</NuxtLink>
        <div class="flex gap-4">
          <UButton to="/login" variant="ghost">Login</UButton>
          <UButton to="/register" variant="solid">Register</UButton>
        </div>
      </nav>
      <main class="p-4">
        <NuxtPage />
      </main>
    </UContainer>
  </div>
</template>
