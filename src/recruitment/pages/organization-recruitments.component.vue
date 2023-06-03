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
        aria-label="Create Recruitment"
        :label="$t('organization-profile.new-recruitment-btn-label')"
        @click="createRecruitmentDialog = true"
      />
      <pv-dialog v-model:visible="createRecruitmentDialog" modal header="Building">
        <template #footer>
          <pv-button label="Okay" icon="pi pi-times" @click="createRecruitmentDialog = false" text />
        </template>
      </pv-dialog>
      <pv-button
        rounded
        outlined
        aria-label="Recruitments History"
        :label="$t('organization-profile.past-recruitment-btn-label')"
        @click="recruitmentsHistory = true"
      />
      <pv-dialog v-model:visible="recruitmentsHistory" modal header="Building">
        <template #footer>
          <pv-button label="Okay" icon="pi pi-times" @click="recruitmentsHistory = false" text />
        </template>
      </pv-dialog>
      <pv-button
        rounded
        outlined
        aria-label="Candidates History"
        :label="$t('organization-profile.past-candidates-btn-label')"
        @click="candidatesHistory = true"
      />
      <pv-dialog v-model:visible="candidatesHistory" modal header="Building">
        <template #footer>
          <pv-button label="Okay" icon="pi pi-times" @click="candidatesHistory = false" text />
        </template>
      </pv-dialog>
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="grid max-w-4xl py-4 space-y-4">
        <recruitment-card v-for="recruitment in recruitments" :recruitment="recruitment"/>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import RecruitmentCard from "../components/recruitment-card.component.vue";
  import {RecruitmentApiService} from "../../shared/services/recruitment.service.js";
  
  export default {
    name: "organization-recruitments",
    components: { RecruitmentCard },
    data() {
      return {
        createRecruitmentDialog: false,
        recruitmentsHistory: false,
        candidatesHistory: false,
        recruitments: [],
        recruitmentApi: new RecruitmentApiService()
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