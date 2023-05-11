<template>
    <div class="rounded-lg shadow-md">
      <div class="bg-primary dark:bg-primary-dark rounded-t-lg h-20 flex justify-center items-center gap-2">
          <i class="pi pi-calendar text-3xl text-white" />
          <h1 class="text-white text-2xl font-bold">{{ $t('activities.schedule-title') }}</h1>
      </div>
      <div class="flex flex-col justify-center items-center h-full bg-white dark:bg-black gap-4 py-6">
          <pending-task-card
          v-for="task in tasks" 
          :key="task.id"
          :task="task"/>
      </div>
    </div>
</template>

<script>
import PendingTaskCard from "../components/pending-task-card.component.vue"
import {TaskApiService} from "../services/taskApi.service.js";
export default {
  name: "schedule",
  components: { PendingTaskCard },
  data() {
    return {
      tasks: [],
      taskApi: new TaskApiService()
    }
  },
  created() {
    this.taskApi.getAll()
        .then(response => this.tasks = response.data);
  }
}
</script>

<style>
</style>