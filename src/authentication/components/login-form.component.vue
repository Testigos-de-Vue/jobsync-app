<template>
  <main class="login bg-tertiary">
    <div class="w-full max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex flex-col space-y-6">
          <div class="grid place-items-center">
            <img class="h-8" src="/jobsync-logo.png">
          </div>
          <div class="grid place-items-center">
            <h1 class="text-black font-bold text-3xl">Log In</h1>
          </div>
          <div class="w-full">
            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              E-mail
            </label>
            <pv-input class="w-full"></pv-input>
          </div>
          <div class="w-full">
            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <pv-input class="w-full"></pv-input>
          </div>
          <pv-button class="w-full text-center" type="submit" label="Log In"></pv-button>
          <div class="grid place-items-center">
            <p class="text-primary"><a class="hover:cursor-pointer" href="#">Forgot Password?</a></p>
            <p>Don't have an account? <a class="hover:cursor-pointer text-primary" href="#">Sign up</a></p>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "login-form"
}
</script>

<style scoped>

</style>