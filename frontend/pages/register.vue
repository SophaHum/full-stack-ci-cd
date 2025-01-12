<template>
  <div class="max-w-md mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <UCard>
      <form @submit.prevent="handleRegister">
        <div class="space-y-4">
          <UFormGroup label="Username">
            <UInput v-model="formData.username" placeholder="Enter your username" />
          </UFormGroup>
          <UFormGroup label="Email">
            <UInput v-model="formData.email" type="email" placeholder="Enter your email" />
          </UFormGroup>
          <UFormGroup label="Password">
            <UInput v-model="formData.password" type="password" placeholder="Enter your password" />
          </UFormGroup>
          <UButton type="submit" block>Register</UButton>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  username: '',
  email: '',
  password: ''
});
const error = ref('');

const config = useRuntimeConfig()
const router = useRouter()

const handleRegister = async () => {
  try {
    error.value = '';
    console.log('Config:', config.public);
    const apiUrl = '/api/auth/register';  // Simplified URL
    console.log('Attempting registration at:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.username,
        email: formData.value.email,
        password: formData.value.password
      })
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    let data;
    try {
      const text = await response.text();
      console.log('Raw response:', text);
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('Parse error:', parseError);
      throw new Error('Invalid server response');
    }

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    console.log('Registration successful:', data);
    await router.push('/login');
  } catch (err: any) {
    error.value = err.message || 'Registration failed';
    console.error('Registration error:', err);
  }
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
