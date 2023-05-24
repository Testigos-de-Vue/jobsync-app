<template>
  <div class="fixed top-4 left-4 p-4 hidden md:block">
    <img class="h-12 w-auto" src="/public/jobsync-icon.png " alt="JobSync Icon">
  </div>
  <form v-on:submit="login($event)" class="bg-white dark:bg-black shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
        <div class="flex justify-center">
          <img class="h-8 w-auto" src="/jobsync-logo.png" alt="JobSync Logo">
        </div>
        <div>
          <h1 class="text-center font-bold text-3xl">{{ $t('auth.login') }}</h1>
        </div>
        <div class="w-full">
          <label class="block tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="email">
            {{ $t('auth.e-mail') }}
          </label>
          <pv-input id="email" class="w-full" v-model="email" placeholder="example@mail.com" type="email" />
        </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="password">
          {{ $t('auth.password') }}
        </label>
        <pv-input id="password" class="w-full" v-model="password" type="password" placeholder="••••••••••••" />
      </div>
      <pv-button type="submit" :label="$t('auth.login')" outlined />
      <div class="grid place-items-center">
        <p class="text-primary">
          <router-link to="/password-forgot" class="hover:font-medium">{{ $t('auth.forgot-password') }}</router-link>
        </p>
        <p>{{ $t('auth.account-question') }}
          <router-link class="hover:font-medium text-primary" to="register">{{ $t('auth.sign-up') }}</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>

export default {
  name: "login-form",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(event) {
      event.preventDefault();
      this.$router.push("/home");
    }
  }
}
</script>

<style scoped>

</style>