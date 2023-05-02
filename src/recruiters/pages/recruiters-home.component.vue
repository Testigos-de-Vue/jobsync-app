<template>
  <div class="text-center mb-6">
    <greeting/>
  </div>
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="flex justify-center mb-7">
      <calendar/>
    </div>
    <div>
      <schedule/>
    </div>
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