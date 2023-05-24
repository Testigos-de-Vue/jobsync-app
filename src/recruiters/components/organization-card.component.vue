<template>
    <router-link to="/home">
      <div class="flex flex-col items-center justify-center gap-1">
        <img 
          :src="organization.avatarUrl" 
          alt="Organization Profile Picture"
          class="rounded-3xl w-48 h-48 object-cover hover:scale-95 duration-300"
        />
        <p class="text-center font-medium text-lg">{{ organization.name }}</p>
      </div>
    </router-link>
  </template>

<script>
export default {
    name: "organization-card",
    props: {
        organization: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
</style>