<template>
  <div class="max-w-md mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-6">Login</h1>
    <UCard>
      <form @submit.prevent="handleLogin">
        <div class="space-y-4">
          <UFormGroup label="Email">
            <UInput v-model="email" type="email" placeholder="Enter your email" />
          </UFormGroup>
          <UFormGroup label="Password">
            <UInput v-model="password" type="password" placeholder="Enter your password" />
          </UFormGroup>
          <UButton type="submit" block>Login</UButton>
        </div>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    // TODO: Implement login logic
    console.log('Login attempt:', { email: email.value, password: password.value })
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>
