<template>
  <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
        <div class="flex justify-center">
          <img class="h-8 w-auto" src="/jobsync-logo.png" alt="JobSync Logo">
        </div>
        <div>
          <h1 class="text-center font-bold text-3xl">Log In</h1>
        </div>
        <div class="w-full">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
            E-mail
          </label>
          <pv-input id="email" class="w-full" placeholder="example@mail.com" type="email" />
        </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Password
        </label>
        <pv-input id="password" class="w-full" type="password" placeholder="••••••••••••" />
      </div>
      <pv-button class="w-full text-center" type="submit" label="Log In" />
      <div class="grid place-items-center">
        <p class="text-primary"><a class="hover:font-medium" href="#">Forgot Password?</a></p>
        <p>Don't have an account? <a class="hover:font-medium text-primary" href="#">Sign up</a></p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "login-form"
}
</script>

<style scoped>

</style>