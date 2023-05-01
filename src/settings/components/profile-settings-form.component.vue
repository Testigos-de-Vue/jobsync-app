<template>
  <div class="flex flex-col bg-white rounded-xl shadow-lg gap-4 p-8">
    <p class="text-3xl text-center font-bold">{{ $t('profile-settings.title') }}</p>
    <hr class="mb-4">
    <form class="flex flex-col justify-center items-center gap-4">
      <p class="text-center text-2xl font-bold mb-2">{{ user.name }}</p>
      <div class="flex flex-col items-center gap-4 pt-8">
        <img
          :src="previewImage ?? user.profileImageUrl"
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
          <label for="username">{{ $t('auth.name') }}</label>
          <pv-input id="username" required v-model="user.name" class="w-full" />
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
            <pv-input id="phone-number" required class="w-full" type="number" />
          </div>
        </div>
        <div>
          <pv-checkbox v-model="user.subscribedToNewsLetter" inputId="agree-to-privacy-policy" name="agree-to-privacy-policy" value="Agree" />
          <label for="agree-to-privacy-policy" class="ml-2">
            {{ $t('auth.agree-privacy-policy') }}
            <a :href="$t('link.terms-of-service')" target="_blank" class="text-primary hover:font-medium">{{ $t('auth.privacy-policy') }}</a>
          </label>
        </div>
      </div>
      <pv-button type="submit" class="w-full" :label="$t('auth.save-changes')" />
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
      <pv-button type="submit" class="w-full" :label="$t('auth.change-password')" />
    </form>
  </div>
</template>

<script>
import {CountriesApiService} from "../../shared/services/countries/countries.service.js";

export default {
  name: "profile-settings-form",
  data() {
    return {
      reader: new FileReader(),
      previewImage: null,
      file: null,
      user: {
        id: 1,
        name: "Name LastName super largo",
        password: "super-secure",
        profileImageUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/c3/a9/b9/c3a9b968-256b-dea6-e76c-d635f0bb2ee9/source/512x512bb.jpg",
        isRecruiter: true,
        subTitle: "ACME Studios",
        email: "thisIsMyEmail@mail.com",
        subscribedToNewsLetter: false
      },
      countries: [],
      countriesApi: new CountriesApiService(),
      selectedCountry: 'Peru',
      password: '',
      newPassword: '',
      confirmNewPassword: ''
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