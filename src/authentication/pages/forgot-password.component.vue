<template>
    <div class="flex justify-center items-center h-full">
      <div class="w-full max-w-xl">
        <forgot-password-form/>
      </div>
    </div>
</template>
  
<script>
import ForgotPasswordForm from "../components/forgot-password-form.component.vue";

export default {
  name: "forgot-password",
  components: {ForgotPasswordForm}
}
</script>

<style scoped>

</style>