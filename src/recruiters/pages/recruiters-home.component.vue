<template>
  <div class="text-center mb-6">
    <greeting/>
  </div>
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="flex justify-center mb-7">
      <calendar/>
    </div>
    <div class="rounded-lg shadow-md h-400 w-400">
      <div class="bg-blue-500 rounded-t-lg h-20 flex justify-center items-center">
        <img
            class="h-10 w-10 float-left mr-4"
            src="/public/task-list-icon.svg"
            alt="task-list image"
        >
        <h1 class="text-white text-2xl font-bold">Today's Schedule</h1>
      </div>
    </div>
  </div>

</template>

<script>
import Calendar from "../../shared/components/calendar.component.vue";
import Greeting from "../../shared/components/greeting.component.vue";
import PendingTasks from "../../shared/components/pending-tasks.component.vue";
export default {
  name: "recruiters-home",
  components: {Calendar, Greeting, PendingTasks},
}
</script>

<style scoped>
</style>