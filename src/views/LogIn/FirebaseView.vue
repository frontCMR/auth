<template>
    <section class="flex flex-col items-center gap-5">
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
        <article class="w-4/5 md:w-3/5 xl:w-4/12 flex flex-col items-center gap-6 mx-auto">
            <div class="flex justify-between items-center w-full">
                <span class="w-1/5 border border-red-500"></span>
                <p class="w-2/5 text-center">New user?</p>
                <span class="w-1/5 border border-red-500"></span>
            </div>
            <button class="btn" @click="navToRegister">Create an account</button>
        </article>
    </section>
</template>
<script lang= "ts" setup>
    import { ref, Ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from 'vue-router';
    const router = useRouter();

    interface UserAuth {
        email: string;
        password: string;
    }  
    const userData: Ref<UserAuth> = ref({
        email: '',
        password: '',
    })

    const navToRegister = () => {
        router.push({ name: 'registerAuth' });
    } 

    const handleOnSubmit = () => {
        const auth = getAuth();
        if (userData.value.email.length > 0 && userData.value.password.length > 0) {            
            signInWithEmailAndPassword(auth, userData.value.email, userData.value.password)
            .then((userCredential) => {
                console.log(userCredential);
                alert('Login successful')
            })
            .catch((error) => {
                console.log(error);
                alert('Login failed')
            })
            userData.value = {
            email: '',
            password: '',
            }
        } else {
            alert('Please fill in all fields')
        }
    }
</script>  