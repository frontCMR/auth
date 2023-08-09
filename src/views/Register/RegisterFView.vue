<template lang="">
    <section>
        <article class="w-4/5 md:w-3/5 xl:w-4/12 mx-auto p-4 border border-gray-300 rounded-md shadow-md">
            <h2 class="text-2xl font-semibold mb-6">Create an account</h2>
            <form @submit.prevent="handleOnSubmit" class="flex flex-col gap-6 my-4">
                <label class="labelInput" for="">
                    <p>Your name</p>
                    <input class="input" required type="text" placeholder="Enter your name" v-model="userData.name">
                </label>
                <label class="labelInput" for="">
                    <p>Email</p>
                    <input class="input" required type="text" placeholder="Enter your email" v-model="userData.email">
                </label>
                <label class="labelInput" for="">
                    <p>Password</p>
                    <input class="input" required type="password" placeholder="Enter your password" v-model="userData.password">
                </label>
                <label class="labelInput" for="">
                    <p>Re-enter your password</p>
                    <input class="input" required type="password" placeholder="Re-enter your password" v-model="rePassword">
                </label>
                <button type="submit" class="btn mx-auto">Register</button>
            </form>
        </article>
    </section>
</template>
<script lang="ts" setup>
    import { ref, Ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    interface UserRegister {
        name: string;
        email: string;
        password: string;
    }

    const userData: Ref<UserRegister> = ref({
        name: '',
        email: '',
        password: '',
    })

    const rePassword: Ref<string> = ref('');

    const handleOnSubmit = () => {
        const auth = getAuth();
        if (rePassword.value === userData.value.password) {
            createUserWithEmailAndPassword(auth, userData.value.email, userData.value.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    alert('Register successful');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Register failed');
                })
            userData.value = {
                name: '',
                email: '',
                password: '',
            }
            rePassword.value = '';  
        } else {
            alert('Passwords do not match');
        }
    }

</script>
<style lang="scss">
    
</style>