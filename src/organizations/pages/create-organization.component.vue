<template>
  <div>
    <pv-button
      rounded
      outlined
      aria-label="Go back"
      @click="$router.back()"
    >
      <i class="pi pi-arrow-left mr-2" />Go back
    </pv-button>

    
    <div class="flex justify-center items-center h-full">
      <div class="w-full max-w-xl py-4">
        <create-organization-form />
      </div>
    </div>
  </div>
</template>

<script>
import CreateOrganizationForm from "../components/create-organization-form.component.vue";

export default {
  name: "create-organization",
  components: {CreateOrganizationForm},
}
</script>

<style scoped>

</style>