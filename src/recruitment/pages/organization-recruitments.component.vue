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
      <pv-button
        rounded
        outlined
        aria-label="Recruitments History"
        :label="$t('organization-profile.past-recruitment-btn-label')"
        @click="recruitmentsHistory = true"
      />
      <pv-button
        rounded
        outlined
        aria-label="Candidates History"
        :label="$t('organization-profile.past-candidates-btn-label')"
        @click="candidatesHistory = true"
      />
    </div>
    <div class="flex justify-center items-center h-full">
      <div class="grid max-w-4xl py-4 space-y-4">
        <recruitment-card v-for="recruitment in recruitments" :recruitment="recruitment"/>
      </div>
    </div>
  </div>

  <pv-dialog v-model:visible="createRecruitmentDialog" modal
             class="w-1/3"
             :header="$t('recruitment.create-recruitment.title')">
    <div class="grid gap-2">
      <div class="grid gap-2">
        <pv-input class="" v-model="processTitle" type="text"
                  :placeholder="$t('recruitment.create-recruitment.title-placeholder')" />
        <pv-input v-model="processDescription" type="text"
                  :placeholder="$t('recruitment.create-recruitment.description-placeholder')"/>
      </div>
      <pv-button outlined @click="createRecruitmentDialog = false" type="submit"
                 :label="$t('recruitment.create-recruitment.create-submit-lbl')"/>
    </div>
  </pv-dialog>
  <pv-dialog v-model:visible="recruitmentsHistory" modal header="Building">
    <template #footer>
      <pv-button label="Okay" icon="pi pi-times" @click="recruitmentsHistory = false" text />
    </template>
  </pv-dialog>
  <pv-dialog v-model:visible="candidatesHistory" modal header="Building">
    <template #footer>
      <pv-button label="Okay" icon="pi pi-times" @click="candidatesHistory = false" text />
    </template>
  </pv-dialog>
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
    },
    methods: {

    }
  }
    
  </script>
  
  <style scoped>
  
  </style>