<template>
<h1 class="text-black dark:text-white text-3xl mt-2">
    {{ $t('greeting.morning-greeting') }}
    <span class="font-bold">{{ user.name }} &#x1F44B;</span>
</h1>
    <p class="text-black dark:text-white text-2xl font-bold mt-2">{{ $t('greeting.start-greeting') }}</p>
</template>

<script>
import {AuthApiService} from "../../authentication/services/authApiService.js";

export default {
  name: "greeting",
  data() {
    return {
      user: {},
      authApi: new AuthApiService()
    }
  },
  created() {
    this.authApi.getUserById(1)
        .then(response => this.user = response.data);
  }
}
</script>

<style scoped>

</style>