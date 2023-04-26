<template>
  <pv-card>
      <template #header>
          <h3>Forgot Password</h3>
          <h4>Enter your email associated with your JobSync account and we will send you a reset link</h4>
      </template>
      <template #content>
          <div>
              <div>
                  <pv-icon class="pi pi-check"></pv-icon>
              </div>
              <div>
                  <p>If the e-mail is registered as an account, you will receive an e-mail
                      with further instructions within a few minutes</p>
              </div>
          </div>
          <div>
              <pv-inputtext type="text" placeholder="e-mail"/>
              <pv-button label="Send me the link"></pv-button>
          </div>
      </template>
      <template #footer>
          <a href="">Already have an account? Sign in</a>
      </template>
  </pv-card>
</template>

<script>
import {PvIcon} from "primevue/icons";

export default {
    name: "forgotpassword",
    components: {PvButton, PvInputtext, PvIcon}
}
</script>

<style scoped>

</style>