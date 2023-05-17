<template>
  <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
    <div class="flex flex-col gap-4">
      <pv-button
        rounded
        outlined
        @click="$router.back()"
        :label="$t('general.go-back-btn-label')"
        icon="pi pi-arrow-left"
      />
      <router-link to="/settings/profile">
        <pv-button
          rounded
          outlined
          aria-label="Profile Settings"
          :label="$t('settings.profile-btn-label')"
          class="w-full"
        />
      </router-link>
      <router-link to="/settings/app">
        <pv-button
          rounded
          outlined
          aria-label="App Settings"
          :label="$t('settings.app-btn-label')"
          class="w-full"
        />
      </router-link>
    </div>
    <div class="flex justify-center items-center h-full px-4">
      <div class="w-full lg:max-w-lg xl:max-w-xl py-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "settings",
}
</script>

<style scoped>

</style>