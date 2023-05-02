<template>
  <div class="fixed top-4 left-4 p-4 hidden md:block">
    <img class="h-12 w-auto" src="/public/jobsync-icon.png " alt="JobSync Icon">
  </div>
  <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
      <div>
        <h1 class="text-left font-bold text-3xl">Password Recovery</h1>
      </div>
      <div>
        <p class="text-gray-500">Enter new password</p>
      </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Password
        </label>
        <pv-input id="password" class="w-full" placeholder="••••••••••••" type="password  " />
      </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Confirm Password
        </label>
        <pv-input id="password" class="w-full" type="password" placeholder="••••••••••••" />
      </div>
      <pv-button class="w-full text-center" type="submit" label="Change password" />
      <div class="grid place-items-center">
          <p>Go back to
            <router-link to="/login">
              <span class="hover:font-medium text-primary">Log In</span>
            </router-link>
          </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "password-recovery-form"
}
</script>

<style scoped>

</style>