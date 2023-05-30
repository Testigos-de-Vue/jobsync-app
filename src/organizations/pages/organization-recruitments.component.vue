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
        @click=""
      />
      <pv-button
        rounded
        outlined
        aria-label="Recruitments History"
        :label="$t('organization-profile.past-recruitment-btn-label')"
        @click=""
      />
      <pv-button
        rounded
        outlined
        aria-label="Candidates History"
        :label="$t('organization-profile.past-candidates-btn-label')"
        @click=""
      />
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="grid max-w-4xl py-4 space-y-4">
        <recruitment-card v-for="recruitment in recruitments" :recruitment="recruitment"/>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import RecruitmentCard from "../../shared/components/recruitment-card.component.vue";
  import {RecruitmentApiService} from "../../shared/services/recruitment.service.js";
  
  export default {
    name: "organization-recruitments",
    components: { RecruitmentCard },
    data() {
      return {
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