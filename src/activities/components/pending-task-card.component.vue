<template>
  <div class="flex flex-col justify-center items-center h-full bg-white">
    <pv-card :pt="{
      root: { class: `m-2 border-2 rounded-lg shadow-md w-11/12`},
      body: { class: 'text-black text-base' },
      title: { class: 'text-black font-bold text-xl'},
      content: { class: 'text-blue max-w-90%'}
    }">
      <template #title>{{ task.description }}</template>
      <template #content>
        <p>{{ task.time }}</p>
      </template>
    </pv-card>  
  </div>
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