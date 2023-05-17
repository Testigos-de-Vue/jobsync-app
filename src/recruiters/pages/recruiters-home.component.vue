<template>
  <div class="text-center mb-6">
    <greeting/>
  </div>
  <div class="grid grid-rows-[auto_1fr] grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 gap-2 lg:gap-4">
    <calendar />
    <schedule />
  </div>
</template>

<script>
import Calendar from "../../shared/components/calendar.component.vue";
import Greeting from "../../shared/components/greeting.component.vue";
import Schedule from "../../activities/pages/schedule.component.vue";

export default {
  name: "recruiters-home",
  components: {Calendar, Greeting, Schedule},
}
</script>

<style scoped>
</style>