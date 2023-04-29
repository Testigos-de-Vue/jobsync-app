<template>
  <div class="bg-white shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
      <div class="flex justify-center">
        <img class="h-8 w-auto" src="/jobsync-logo.png" alt="JobSync Logo">
      </div>
      <div>
        <h1 class="text-center font-bold text-3xl">Sign Up</h1>
      </div>
      <div class="grid grid-cols-2 font-medium gap-8">
        <button
          aria-label="Activate candidate form"
          class="rounded py-3"
          :class="[isCandidate ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
          @click="setIsCandidate(true)"
        >
          Candidate
        </button>
        <button
          aria-label="Activate recruiter form"
          class="rounded py-3"
          :class="[!isCandidate ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
          @click="setIsCandidate(false)"
        >
          Recruiter
        </button>
      </div>
      <form class="flex flex-col space-y-3">
        <div>
          <label for="name">{{ $t('auth.name') }}</label>
          <pv-input required id="name" class="w-full" placeholder="Name" type="text" />
        </div>
        <div>
          <label for="email">{{ $t('auth.e-mail') }}</label>
          <pv-input required id="email" class="w-full" placeholder="example@mail.com" type="email" />
        </div>
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="password">{{ $t('auth.password') }}</label>
            <pv-input required id="password" class="w-full" type="password" placeholder="••••••••••••" />
          </div>
          <div>
            <label for="confirm-password">{{ $t('auth.confirm-password') }}</label>
            <pv-input required id="confirm-password" class="w-full" type="password" placeholder="••••••••••••" />
          </div>
        </div>
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="country">{{ $t('auth.country') }}</label>
            <pv-dropdown
              required
              id="country"
              class="w-full"
              v-model="selectedCountry"
              :options="countries"
              :placeholder="$t('auth.select-country')"
            />
          </div>
          <div>
            <label for="phone-number">{{ $t('auth.phone-number') }}</label>
            <pv-input id="phone-number" required class="w-full" type="number" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <pv-checkbox v-model="subscribeToNewsletter" inputId="subscribe-to-newsletter" name="subscribe-to-newsletter" value="Subscribe" />
          <label for="subscribe-to-newsletter" class="ml-2">{{ $t('auth.subscribe-newsletter') }}</label>
        </div>
        <div class="flex items-center justify-center">
          <pv-checkbox v-model="readAndAgreePrivacyPolicy" inputId="agree-to-privacy-policy" name="agree-to-privacy-policy" value="Agree" />
          <label for="agree-to-privacy-policy" class="ml-2">
              {{ $t('auth.agree-privacy-policy') }}
              <a :href="$t('link.terms-of-service')" target="_blank" class="text-primary hover:font-medium">{{ $t('auth.privacy-policy') }}</a>
          </label>
        </div>
        <pv-button class="w-full text-center" type="submit" label="Sign Up" />
        <p class="text-center my-4">Already have an account? <router-link class="hover:font-medium text-primary" to="/login">Log In</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import {CountriesApiService} from "../../shared/services/countries/countries.service.js";
export default {
  name: "register-form",
  data() {
    return {
      isCandidate: true,
      countries: [],
      countriesApi: new CountriesApiService(),
      selectedCountry: '',
      subscribeToNewsletter: false,
      readAndAgreePrivacyPolicy: false
    }
  },
  created() {
    this.loadCountries();
  },
  methods: {
    loadCountries() {
      this.countriesApi.getCountries()
        .then(response => {
          this.countries = response.data.map(countryData => countryData.name.common);
          this.countries.sort();
        })
        .catch(e => {
          this.countries.push("Error loading countries");
        })
    },
    setIsCandidate(state) {
      this.isCandidate = state;
    }
  }
}
</script>

<style scoped>

</style>