<template>
  <MainHeader/>
  <main class="max-w-7xl mx-auto p-3">
    <router-view/>
  </main>
  <footer class="max-w-7xl mx-auto p-3">
    <p>footer</p>
  </footer>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// nav {
//     .router-link-exact-active {
//       color: #42b983;
//     }
// }
</style>
