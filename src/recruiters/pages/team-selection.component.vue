<template>
    <div>
        <div class="text-center mb-6">
            <greeting/>
        </div>
        <div class="space-y-4">
          <div class="flex gap-4 items-center">
            <h2 class="font-medium text-xl text-center">
              {{ $t('organization-selection.choose-title') }}
              <router-link to="/organizations/create">
                <span class="font-medium text-xl text-primary underline hover:scale-95 duration-300">
                  {{ $t('create-org.title') }}
                </span>
              </router-link>
            </h2>
          </div>
          <div class="md:flex md:grid-flow-col gap-4">
            <organization-card
                v-for="organization in organizations"
                :key="organization.id"
                :organization="organization"
              />
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import Greeting from "../../shared/components/greeting.component.vue";
  import OrganizationCard from "../components/organization-card.component.vue";
  import { OrganizationApiService } from "../../shared/services/organizations.service.js"

  export default {
    name: "team-selection",
    components: {Greeting, OrganizationCard},
    data() {
      return {
        organizations: [],
        organizationsApi: new OrganizationApiService()
      }
    },
    created() {
      this.organizationsApi.getAll()
        .then(response => this.organizations = response.data);
    }
  }
  </script>
  
  <style scoped>
  
  </style>