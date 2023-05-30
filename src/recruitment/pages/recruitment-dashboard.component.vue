<template>
  <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center justify-center">
    <div class="flex flex-col gap-4">
      <pv-button
          rounded
          outlined
          @click="$router.back()"
          :label="$t('general.go-back-btn-label')"
          icon="pi pi-arrow-left"
      />
      <pv-button
          rounded
          outlined
          aria-label="Add phase"
          :label="$t('recruitment.dashboard.add-phase-lbl')"
          @click=""
      />
      <pv-button
          rounded
          outlined
          aria-label="Add Candidates"
          :label="$t('recruitment.dashboard.add-candidates-lbl')"
          @click=""
      />
      <pv-button
          rounded
          outlined
          aria-label="Recruitment Settings"
          :label="$t('recruitment.dashboard.recruitment-settings-lbl')"
          @click=""
      />
    </div>
    <div class="gap-4">
      <div class="space-y-2">
        <div class="flex gap-2 overflow-x-auto">
          <div class="bg-purple-600 dark:bg-purple-950 px-2 py-2 rounded-xl text-white">
            <p class="font-medium">
              <i class="pi pi-user" />
              {{ recruitment.candidates.length }}
              {{ $t('recruitment.dashboard.candidates-counter')}}
            </p>
          </div>
          <div class="bg-red-600 dark:bg-red-950 px-2 py-2 rounded-xl text-white">
            <p class="font-medium">
              <i class="pi pi-user" />
              {{ recruitment.phases.length }}
              {{ $t('recruitment.dashboard.phases-counter')}}
            </p>
          </div>
        </div>
        <div>
          <recruitment-card :recruitment="recruitment"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecruitmentCard from "../../shared/components/recruitment-card.component.vue";
import {RecruitmentApiService} from "../../shared/services/recruitment.service.js";

export default {
  name: "recruitment-dashboard",
  components: { RecruitmentCard },
  data() {
    return {
      recruitmentApi: new RecruitmentApiService(),
      recruitment: {},
    }
  },
  created() {
    const recruitmentId = this.$route.params.id;
    this.recruitmentApi.getById(recruitmentId)
        .then(response => this.recruitment = response.data);
  }
}
</script>

<style scoped>

</style>