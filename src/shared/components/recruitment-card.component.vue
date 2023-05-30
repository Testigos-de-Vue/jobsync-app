<template>
  <router-link :to="`/${recruitment.id}/dashboard`">
    <div class="border-2 px-8 py-4 rounded-lg duration-300 hover:border-primary">
      <h1 class="font-semibold text-2xl">{{ recruitment.title }}</h1>
      <ul>
        <li>
          <span class="font-semibold">{{ $t('recruitment-card.start-date-label') }}: </span>
          {{ recruitment.startDate }}
        </li>
        <li>
          <span class="font-semibold text-primary">{{ $t('recruitment-card.recruitment-status-label') }}: </span>
          {{ recruitment.recruitmentStatus }}
        </li>
        <li>
          <span class="font-semibold text-primary">{{ $t('recruitment-card.organizer-label') }}: </span>
          {{ recruitment.organizer }}
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "recruitment-card",
    props: {
        recruitment: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
</style>