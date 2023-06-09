<template>
  <div class="fixed top-4 left-4 p-4 hidden md:block">
    <img class="h-12 w-auto" src="/public/jobsync-icon.png " alt="JobSync Icon">
  </div>
  <div class="bg-white dark:bg-black shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
      <div class="flex justify-center">
        <img class="h-8 w-auto" src="/jobsync-logo.png" alt="JobSync Logo">
      </div>
      <div>
        <h1 class="text-center font-bold text-3xl">{{ $t('auth.sign-up-title') }}</h1>
      </div>
      <div class="grid grid-cols-2 font-medium gap-8">
        <button
          aria-label="Activate candidate form"
          class="rounded py-3"
          :class="[isCandidate ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
          @click="setIsCandidate(true)"
        >
          {{ $t('auth.candidate') }}
        </button>
        <button
          aria-label="Activate recruiter form"
          class="rounded py-3"
          :class="[!isCandidate ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
          @click="setIsCandidate(false)"
        >
          {{ $t('auth.recruiter') }}
        </button>
      </div>
      <form
        v-on:submit="register($event)"
        class="flex flex-col space-y-3"
      >
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="first-name">{{ $t('auth.first-name') }}</label>
            <pv-input
                required
                id="first-name"
                class="w-full"
                v-model="firstName"
                :placeholder="$t('auth.first-name')"
                type="text"
            />
          </div>
          <div>
            <label for="last-name">{{ $t('auth.first-name') }}</label>
            <pv-input
                required
                id="last-name"
                class="w-full"
                v-model="lastName"
                :placeholder="$t('auth.last-name')"
                type="text"
            />
          </div>
        </div>
        <div>
          <label for="email">{{ $t('auth.e-mail') }}</label>
          <pv-input
              required
              id="email"
              class="w-full"
              v-model="email"
              placeholder="example@mail.com"
              type="email"
          />
        </div>
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="password">{{ $t('auth.password') }}</label>
            <pv-input
                required
                id="password"
                class="w-full"
                v-model="password"
                type="password"
                placeholder="••••••••••••"
            />
          </div>
          <div>
            <label for="confirm-password">{{ $t('auth.confirm-password') }}</label>
            <pv-input
                required
                id="confirm-password"
                class="w-full"
                v-model="confirmPassword"
                type="password"
                placeholder="••••••••••••"
            />
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
            <pv-input
                required
                id="phone-number"
                class="w-full"
                v-model="phoneNumber"
                type="number"
            />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <pv-checkbox
              v-model="subscribeToNewsletter"
              inputId="subscribe-to-newsletter"
              name="subscribe-to-newsletter"
              value="Subscribe"
          />
          <label for="subscribe-to-newsletter" class="ml-2">{{ $t('auth.subscribe-newsletter') }}</label>
        </div>
        <div class="flex items-center justify-center">
          <pv-checkbox
              v-model="readAndAgreePrivacyPolicy"
              inputId="agree-to-privacy-policy"
              name="agree-to-privacy-policy"
              value="Agree"
          />
          <label for="agree-to-privacy-policy" class="ml-2">
              {{ $t('auth.agree-privacy-policy') }}
              <a :href="$t('link.terms-of-service')" target="_blank" class="text-primary hover:font-medium">{{ $t('auth.privacy-policy') }}</a>
          </label>
        </div>
        <pv-button type="submit" :label="$t('auth.sign-up')" outlined/>
        <p class="text-center my-4">{{ $t('auth.have-account-question') }}<router-link class="hover:font-medium text-primary" to="/login">{{ $t('auth.sign-title') }}</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import {CountriesApiService} from "../../shared/services/countries.service.js";
import {AuthApiService} from "../services/authApiService.js";
export default {
  name: "register-form",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: null,
      isCandidate: true,
      countries: [],
      countriesApi: new CountriesApiService(),
      selectedCountry: '',
      subscribeToNewsletter: false,
      readAndAgreePrivacyPolicy: false,
      authApi: new AuthApiService()
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
    },
    register(event) {
      event.preventDefault();

      if (!this.readAndAgreePrivacyPolicy) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "You must accept the privacy policy",
          life: 3000
        });
        return;
      }

      if (this.confirmPassword !== this.password) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Passwords do not match",
          life: 3000
        });
        return;
      }

      this.authApi.signUp(
        this.firstName,
        this.lastName,
        this.selectedCountry,
        this.email,
        this.password,
        this.phoneNumber.toString(),
        this.subscribeToNewsletter[0]==="Subscribe" ? true : false,
        !this.isCandidate
      )
        .then(res => {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: `${res.data.message}. Redirecting to login...`,
            life: 3000
          });
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        })
        .catch(err => {
          this.$toast.add({
            severity: "error",
            summary: "Error",
            detail: err.response.data,
            life: 4000
          });
        })
    }
  }
}
</script>

<style scoped>

</style>