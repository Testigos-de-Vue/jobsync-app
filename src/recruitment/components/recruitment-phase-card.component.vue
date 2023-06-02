<template>
  <div class="h-full flex items-center justify-center">
    <div :class="[`bg-gray-100`, `dark:bg-gray-800`, 'flex border rounded-xl px-4 py-4 w-72 h-[630px]']">
      <div id="header" class="flex justify-between items-center w-full h-fit px-1 py-1">
        <h1 class="font-semibold text-xl">{{ phase.title }}</h1>
        <div class="flex">
          <pv-button icon="pi pi-ellipsis-h" text rounded size="large" severity="secondary" outlined
                     aria-label="Phase dialog expander" />
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "recruitment-phase-card",
  props: {
    phase: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>