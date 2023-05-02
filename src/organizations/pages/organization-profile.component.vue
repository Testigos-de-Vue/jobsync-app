<template>
    <div>
      <pv-button
        rounded
        outlined
        aria-label="Go back"
        @click="$router.back()"
      >
        <i class="pi pi-arrow-left mr-2" />Go back
      </pv-button>
      <h1>Working on Testigos de Vue</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "organization",
  }
  </script>
  
  <style scoped>
  
  </style>