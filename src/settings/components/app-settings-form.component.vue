<template>
  <div class="flex flex-col bg-white rounded-xl shadow-lg gap-4 p-8">
    <p class="text-3xl text-center font-bold">{{ $t('app-settings.title') }}</p>
    <hr class="mb-4">
    <div class="flex flex-wrap items-center gap-6">
      <p class="text-xl font-semibold">{{ $t('app-settings.lang-switcher-label') }}</p>
      <language-switcher />
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "app-settings-form",
  components: {LanguageSwitcher}
}
</script>

<style scoped>

</style>