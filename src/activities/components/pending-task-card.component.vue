<template>
  <pv-card :pt="{root: { class: `m-2 border-2 rounded-lg shadow-md w-11/12`}}">
    <template #title>{{ task.description }}</template>
    <template #content>
      <p>{{ task.time }}</p>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: "pending-task-card",
  props: {
    task: {
        type: Object,
        required: true
    }
  }
}
</script>

<style scoped>

</style>