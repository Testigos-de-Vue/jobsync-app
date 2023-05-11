<template>
  <div class="text-center mb-6">
    <greeting/>
  </div>
  <div class="grid grid-rows-2 md:grid-cols-2">
    <div class="flex justify-center">
      <div>
        <calendar/>
      </div>
    </div>
    <div class="flex-shrink-0">
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