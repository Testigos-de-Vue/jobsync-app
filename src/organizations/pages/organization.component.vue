<template>
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
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
            aria-label="Create Recruitment"
            :label="$t('organization-profile.new-recruitment-btn-label')"
            @click=""
        />
        <pv-button
            rounded
            aria-label="Recruitments History"
            :label="$t('organization-profile.past-recruitment-btn-label')"
            @click=""
        />
        <pv-button
            rounded
            aria-label="Candidates History"
            :label="$t('organization-profile.past-candidates-btn-label')"
            @click=""
        />
        </div>
        <div class="flex justify-center items-center h-full">
            <div class="max-w-3xl py-4">
                <recruitment-card
                    v-for="recruitment in recruitments" 
                    :key="recruitment.id"
                    :recruitment="recruitment"
                    class="mb-4"
                />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import RecruitmentCard from "../components/recruitment-card.component.vue";
  
  export default {
    name: "organization",
    components: { RecruitmentCard },
    data() {
    return {
      recruitments: [
        {   
            id: 1,
            title: "2023-Business Administration UPC Interniship Program Recruitment",
            startDate: "2023/04/12",
            recruitmentStatus: "Reviewing Candidates",
            jobPostStatus: "Hiring Open 🟢",
            organizer: "Jeffrey Ocampos"
        },
        {
            id: 2,
            title: "Staff team for Miraflores shop part-timer recruitment (No CV needed)",
            startDate: "2023/02/10",
            recruitmentStatus: "Interviewing candidates",
            jobPostStatus: "Closed 🔴",
            organizer: "Jeffrey Ocampos"
        }
      ],
    }
    },
  }
    
  </script>
  
  <style scoped>
  
  </style>