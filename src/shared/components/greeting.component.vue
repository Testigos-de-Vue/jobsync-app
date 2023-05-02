<template>
<h1 class="text-black text-3xl mt-2"> {{ $t('greeting.morning-greeting') }}<span class="font-bold">Name LastName super largo</span> &#x1F44B;</h1>
    <p class="text-black text-2xl font-bold mt-2">{{ $t('greeting.start-greeting') }}</p>
</template>

<script>
export default {
  name: "greeting",
  props: {
    user: null
  }
}
</script>

<style scoped>

</style>