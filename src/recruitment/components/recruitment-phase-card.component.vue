<template>
  <div>
    <div class="bg-gray-100 dark:bg-gray-800 border rounded-xl px-4 py-4 w-72 h-[630px] space-y-2">
      <div id="header" class="flex justify-between items-center w-full h-fit px-1 py-1">
        <h1 class="font-semibold text-xl">{{ phase.title }}</h1>
        <pv-button
            icon="pi pi-ellipsis-h" text rounded size="large" severity="secondary" outlined
            aria-label="Phase dialog expander" />
      </div>
      <div v-for="candidate in phase.candidates" :key="candidate.id">
        <div class="flex border px-2 py-4 rounded-lg bg-white hover:scale-95 duration-100 items-center space-x-2">
          <img class="rounded-full w-12 h-12 object-cover"
               :src=candidate.user.profileImageUrl
               :alt="candidate.user.name + ' profile picture'"/>
          <p>{{ candidate.user.name }}</p>
        </div>
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
  }
}
</script>

<style scoped>
</style>