<template>
  <div class="flex items-center gap-4">
    <img
      class="h-20 w-20 object-cover rounded-full"
      :src="user.imageUrl"
      :alt="`${user.firstName} profile picture`"
    >
    <div class="dark:text-white">
      <p class="text-xl font-bold">{{ user.firstName }}</p>
<!--      <p>{{ user.subTitle }}</p>-->
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
