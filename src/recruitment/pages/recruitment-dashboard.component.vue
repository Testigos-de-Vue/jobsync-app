<template>
  <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4">
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
      recruitments: [],
      recruitmentApi: new RecruitmentApiService(),
      recruitment: {}
    }
  },
  created() {
    this.recruitmentApi.getAll()
        .then(response => this.recruitments = response.data);
  }
}
</script>

<style scoped>

</style>