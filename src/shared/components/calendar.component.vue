<template>
  <div class="card flex justify-content-center ">
    <pv-calendar v-model="date" inline showWeek />
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      date: null
    };
  },
}
</script>

<style scoped>

</style>