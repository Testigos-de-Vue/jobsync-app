<template>
    <div class="rounded-lg shadow-md">
        <div class="bg-blue-500 rounded-t-lg h-20 flex justify-center items-center">
            <img
                class="h-10 w-10 float-left mr-4"
                src="/public/task-list-icon.svg"
                alt="task-list image"
            >
            <h1 class="text-white text-2xl font-bold">{{ $t('activities.schedule-title') }}</h1>
        </div>
        <div class="my-4">
            <pending-task-card
            v-for="task in tasks" 
            :key="task.id"
            :task="task"
        />
        </div>
    </div>
</template>

<script>
import PendingTaskCard from "../components/pending-task-card.component.vue"
export default {
  name: "schedule",
  components: { PendingTaskCard },
  data() {
    return {
      tasks: [
        {   
            id: 1,
            time: "9:00 - 13:00",
            description: "Make new test for software developer",
        },
        {
            id: 2,
            time: "16:00 - 16:30",
            description: "Interview Susane Itala",
        }
      ],
    }
    },
}
</script>

<style>
</style>