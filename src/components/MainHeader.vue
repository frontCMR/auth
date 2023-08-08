<template lang="">
    <header class="max-w-7xl mx-auto p-3">
        <nav class="flex justify-between items-center">
            <router-link :to="{ name: 'home'}">
                <h1 class="text-xl font-bold"> <span class="text-red-500">BHC</span>  Real State</h1>
            </router-link>
            <NavMenu />
        </nav>
    </header>
</template>
<script lang="ts" setup>
    import NavMenu from '@/components/NavMenu.vue'
</script>
