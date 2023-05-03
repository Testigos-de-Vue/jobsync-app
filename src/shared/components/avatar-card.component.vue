<template>
  <div class="flex items-center gap-4">
    <img
      class="h-20 w-20 object-cover rounded-full"
      :src="user.profileImageUrl"
      :alt="`${user.name} profile picture`"
    >
    <div class="text-white">
      <p class="text-xl font-bold">{{ user.name }}</p>
      <p>{{ user.subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "avatar-card",
  props: {
    user: {}
  }
}
</script>

<style scoped>
</style>
