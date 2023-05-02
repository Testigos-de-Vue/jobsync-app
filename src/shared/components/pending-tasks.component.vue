<template>
  <div class="rounded-lg shadow-md h-400 w-400">
    <div class="bg-blue-500 rounded-t-lg h-20 flex justify-center items-center">
      <img
          class="h-10 w-10 float-left mr-4"
          src="/public/task-list-icon.svg"
          alt="task-list image"
      >
      <h1 class="text-white text-2xl font-bold">Today's Schedule</h1>
    </div>
    <div class="bg-white rounded-b-lg h-380 py-5">
      <div class="flex flex-col justify-center items-center h-full ">
        <pv-card :pt="{
          root: { class: `m-4 border-2 rounded-lg shadow-md w-11/12`},
          body: { class: 'text-black text-base' },
          title: { class: 'text-black font-bold text-xl'},
          content: { class: 'text-blue max-w-90%'}
        }">
          <template #title> 9:00 - 13:00</template>
          <template #content>
            <p>Make new test for software developer</p>
          </template>
        </pv-card>
        <pv-card :pt="{
          root: { class: `m-4 border-2 rounded-lg shadow-md w-11/12`},
          body: { class: 'text-black text-base' },
          title: { class: 'text-black font-bold text-xl'},
          content: { class: 'text-blue max-w-90%'}
        }">
          <template #title> 16:00 - 16:30</template>
          <template #content>
            <p>Interview Susane Itala</p>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pending-tasks",
}
</script>

<style scoped>

</style>