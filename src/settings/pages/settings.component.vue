<template>
  <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
    <div class="flex flex-col gap-4">
      <pv-button
        rounded
        outlined
        @click="$router.back()"
        :label="$t('general.go-back-btn-label')"
        icon="pi pi-arrow-left"
      />
      <pv-button
        rounded
        class="bg-white"
        :outlined="!useProfileSettings"
        aria-label="Profile Settings"
        :label="$t('settings.profile-btn-label')"
        @click="setProfileSettingsVisible(true)"
      />
      <pv-button
        rounded
        :outlined="useProfileSettings"
        aria-label="App Settings"
        :label="$t('settings.app-btn-label')"
        @click="setProfileSettingsVisible(false)"
      />
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="w-full max-w-xl py-4">
        <profile-settings-form v-if="useProfileSettings" />
        <app-settings-form v-else />
      </div>
    </div>
  </div>
</template>

<script>
import CreateOrganizationForm from "../../organizations/components/create-organization-form.component.vue";
import AppSettingsForm from "../components/app-settings-form.component.vue";
import ProfileSettingsForm from "../components/profile-settings-form.component.vue";

export default {
  name: "settings",
  components: {ProfileSettingsForm, AppSettingsForm, CreateOrganizationForm},
  data() {
    return {
      useProfileSettings: true,
    }
  },
  methods: {
    setProfileSettingsVisible(state) {
      this.useProfileSettings = state;
    }
  }
}
</script>

<style scoped>

</style>