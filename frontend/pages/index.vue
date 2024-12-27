<template>
  <div>
    <h1 class="text-4xl font-bold mb-6">Welcome to Full Stack App</h1>
    <p class="text-lg text-green-600 mb-8">
      A modern full-stack application with CI/CD pipeline
    </p>
    <div class="grid md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Features</h2>
        </template>
        <ul class="list-disc list-inside space-y-2">
          <li>User Authentication</li>
          <li>Modern UI with Nuxt UI</li>
          <li>Express.js Backend</li>
          <li>MongoDB Database</li>
          <li>Docker Containerization</li>
          <li>CI/CD Pipeline</li>
        </ul>
      </UCard>
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Getting Started</h2>
        </template>
        <p class="mb-4">
          Create an account or login to get started with our application.
        </p>
        <div class="flex gap-4">
          <UButton to="/register" color="primary">Register Now</UButton>
          <UButton to="/login" variant="ghost">Login</UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
