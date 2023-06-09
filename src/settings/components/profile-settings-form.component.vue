<template>
  <div class="flex flex-col bg-white dark:bg-black rounded-xl shadow-lg gap-4 p-8">
    <p class="text-3xl text-center font-bold">{{ $t('profile-settings.title') }}</p>
    <hr class="mb-4">
    <form class="flex flex-col justify-center items-center gap-4">
      <p class="text-center text-2xl font-bold mb-2">{{ user.name }}</p>
      <div class="flex flex-col items-center gap-4 pt-8">
        <img
          :src="previewImage ?? user.imageUrl"
          alt="Your profile image"
          class="h-44 w-44 object-cover border-2 border-gray-400 p-2 rounded-full"
        >
        <div class="flex justify-center items-center gap-3">
          <pv-file-upload
            ref="fileUpload"
            mode="basic"
            v-model="file"
            accept="image/*"
            :chooseLabel="$t('profile-settings.change-pp')"
            :maxFileSize="5000000"
            @select="selectedFile"
          />
          <pv-button
            v-if="previewImage"
            icon="pi pi-trash"
            severity="danger"
            @click="clearImageUpload"
          />
        </div>
        <div class="w-full">
          <label for="username">{{ $t('auth.first-name') }}</label>
          <pv-input id="username" required v-model="user.firstName" class="w-full" />
        </div>
        <div class="w-full">
          <label for="username">{{ $t('auth.last-name') }}</label>
          <pv-input id="username" required v-model="user.lastName" class="w-full" />
        </div>
        <div class="w-full">
          <label for="email">{{ $t('auth.e-mail') }}</label>
          <pv-input id="email" required v-model="user.email" class="w-full" />
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
            <pv-input id="phone-number" v-model="user.phoneNumber" required class="w-full" type="number" />
          </div>
        </div>
        <div>
          <pv-checkbox inputId="agree-to-privacy-policy" name="agree-to-privacy-policy"  value="Agree" />
          <label for="agree-to-privacy-policy" class="ml-2">
            {{ $t('auth.subscribe-newsletter') }}
          </label>
        </div>
      </div>
      <pv-button type="submit" class="w-full" :label="$t('auth.save-changes')" outlined />
    </form>
    <form class="flex flex-col gap-4 pt-8">
      <div>
        <label for="password">{{ $t('auth.password') }}</label>
        <pv-input id="password" type="password" v-model="password" :label="password" class="w-full" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="new-password">{{ $t('auth.new-password') }}</label>
          <pv-input id="new-password" type="password" v-model="newPassword" :label="password" class="w-full" />
        </div>
        <div>
          <label for="confirm-new-password">{{ $t('auth.confirm-new-password') }}</label>
          <pv-input id="confirm-new-password" type="password" v-model="confirmNewPassword" :label="password" class="w-full" />
        </div>
      </div>
      <pv-button type="submit" class="w-full" :label="$t('auth.change-password')" outlined />
    </form>
  </div>
</template>

<script>
import {CountriesApiService} from "../../shared/services/countries.service.js";
import {AuthApiService} from "../../authentication/services/authApiService.js";
import {useUserStore} from "../../authentication/store/user-store.store.js";
import {computed} from "vue";

export default {
  name: "profile-settings-form",
  data() {
    return {
      reader: new FileReader(),
      previewImage: null,
      file: null,
      authApi: new AuthApiService(),
      countries: [],
      countriesApi: new CountriesApiService(),
      selectedCountry: 'Peru',
      subscribe: true,
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  },
  setup() {
    const userStore = useUserStore();
    const user = computed(() => userStore.$state.user);
    return {
      user
    };
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
    selectedFile(event) {
      const file = event.files[0];
      this.reader.onload = (e) => this.previewImage = e.target.result;
      this.reader.readAsDataURL(file);
    },
    clearImageUpload() {
      this.file = null;
      this.previewImage = null;
      this.$refs.fileUpload.clear();
    }
  }
}
</script>

<style scoped>
</style>