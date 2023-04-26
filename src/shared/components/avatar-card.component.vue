<template>
  <div class="flex items-center gap-4">
<!--    <div class="h-20 w-20 overflow-hidden rounded-full">-->
<!--      <div-->
<!--        :style="{backgroundImage:`url(${ user.profileImageUrl })`}"-->
<!--        class="h-full w-auto bg-center bg-contain bg-no-repeat">-->
<!--      </div>-->
<!--    </div>-->
      <img class="h-20 w-20 object-cover rounded-full" :src="user.profileImageUrl" alt="">
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
