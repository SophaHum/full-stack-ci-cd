<template>
  <div class="max-w-md mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <UCard>
      <form @submit.prevent="handleRegister">
        <div class="space-y-4">
          <UFormGroup label="Username">
            <UInput v-model="username" placeholder="Enter your username" />
          </UFormGroup>
          <UFormGroup label="Email">
            <UInput v-model="email" type="email" placeholder="Enter your email" />
          </UFormGroup>
          <UFormGroup label="Password">
            <UInput v-model="password" type="password" placeholder="Enter your password" />
          </UFormGroup>
          <UButton type="submit" block>Register</UButton>
        </div>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const username = ref('')
const email = ref('')
const password = ref('')

async function handleRegister() {
  try {
    // TODO: Implement registration logic
    console.log('Register attempt:', { 
      username: username.value, 
      email: email.value, 
      password: password.value 
    })
  } catch (error) {
    console.error('Registration error:', error)
  }
}
</script>
