<template>
  <pv-calendar v-model="date" inline showWeek />
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