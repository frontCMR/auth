<template>
  <section class="">
    <article class="w-4/5 md:w-3/5 xl:w-4/12 mx-auto p-4 border border-gray-300 rounded-md shadow-md">
      <h1 class="text-2xl font-semibold mb-6">Login</h1>
      <form @submit.prevent="handleOnSubmit" class="flex flex-col gap-6 my-4">
        <label for="" class="labelInput">
          <p>Email</p>
          <input type="text" v-model="userData.email" placeholder="paco@hotmail.com" class="input">
        </label>
        <label for="" class="labelInput">
          <p>Password</p>
          <input type="password" v-model="userData.password" placeholder="******" class="input">
        </label>
        <button type="submit" class="btn">Login</button>
      </form>
    </article>
  </section>
</template>
<script lang= "ts" setup>
/*
https://hfp69ilv.directus.app/auth/login
email: testuser@gogodev.net
pass: 12345678
*/ 
import { ref, Ref } from 'vue';
import { AuthService } from '@/services/AuthService';
interface UserAuth {
  email: string;
  password: string;
}

const userData: Ref<UserAuth> = ref({
  email: '',
  password: '',
})


const handleOnSubmit = async () => {
  const auth = new AuthService()
  const res = await auth.login(userData.value.email, userData.value.password)
  if (res) {
    alert('Login successful')
  } else {
    alert('Login failed')
  }
  userData.value = {
    email: '',
    password: '',
  }
}

</script>

