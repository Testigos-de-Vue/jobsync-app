<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-full max-w-xl">
      <recover-password-form/>
    </div>
  </div>
</template>

<script>
import RecoverPasswordForm from "../components/recover-password-form.component.vue";

export default {
  name: "recover-password",
  components: {RecoverPasswordForm}
}
</script>

<style scoped>

</style>