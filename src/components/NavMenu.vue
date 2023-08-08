<template lang="">
    <ul class="flex items-center gap-5 list-none font-bold">
        <li>
            <!-- <router-link to="/login">About</router-link> -->
            About
        </li>

        <li>
            <!-- <router-link to="/login">Properties</router-link> -->
            Properties
        </li>
        <li>
            <!-- <router-link to="/login">Testimonials</router-link> -->
            Testimonials
        </li>
        <li>
            <!-- <router-link to="/login">Contact</router-link> -->
            Contact
        </li>
        <li>
            <router-link :to="{ name: 'loginAuth'}">SigIn</router-link>
        </li>
    </ul>
</template>
<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .router-link-exact-active {
        color: red;
    }
</style>
