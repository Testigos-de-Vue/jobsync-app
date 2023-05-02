<template>
    <pv-card rounded>
        <template #title>
            <h1 class="font-semibold text-black">{{ recruitment.title }}</h1>
        </template>
        <template #content>
            <ul>
                <li>
                    <span class="font-semibold text-black">{{ $t('recruitment-card.start-date-label') }}: </span>
                    {{ recruitment.startDate }}
                </li>
                <li>
                    <span class="font-semibold text-primary">{{ $t('recruitment-card.recruitment-status-label') }}: </span>
                    {{ recruitment.recruitmentStatus }}
                </li>
                <li>
                    <span class="font-semibold text-primary">{{ $t('recruitment-card.job-post-status-label') }}: </span>
                    {{ recruitment.jobPostStatus }}
                </li>
                <li>
                    <span class="font-semibold text-primary">{{ $t('recruitment-card.organizer-label') }}: </span>
                    {{ recruitment.organizer }}
                </li>
            </ul>
        </template>
    </pv-card>
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