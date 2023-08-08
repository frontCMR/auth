<template>
  <section class="">
    <article class="w-4/5 mx-auto  p-4 border border-red-500 rounded-md">
      <h1 class="text-2xl font-semibold mb-3">Login</h1>
      <form @submit.prevent="handleOnSubmit" class="flex flex-col gap-6 my-4">
        <label for="" class="labelInput">
          Email
          <input type="text" v-model="userData.email" placeholder="paco@hotmail.com" class="input">
        </label>
        <label for="" class="labelInput">
          Password
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
interface UserAuth {
  email: string;
  password: string;
}
const userData: Ref<UserAuth> = ref({
  email: '',
  password: '',
})

const handleOnSubmit = () => {
  console.log(userData.value)
  userData.value = {
    email: '',
    password: '',
  }
}

</script>

