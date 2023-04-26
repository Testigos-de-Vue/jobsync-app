<template>
  <main class="h-screen md:grid md:grid-cols-[auto_1fr]">
    <section class="p-8 h-full">
      <side-bar />
    </section>
    <main class="container p-8">
      <router-view />
    </main>
  </main>
</template>

<script setup>
// Dependencies
import SideBar from "./shared/components/side-bar.component.vue";
</script>

<style scoped>
  main {
    overflow-y: scroll;
  }
</style>
