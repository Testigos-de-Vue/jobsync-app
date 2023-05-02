<template>
    <form class="panel">
      <pv-card class="userinfo">
          <template #header>
              <img class="image" src="{{user.profileImageUrl}}" alt="user image">
              <pv-button class="w-full text-center" type="submit" label= rounded></pv-button>
              <h1>{{user.name}}</h1>
          </template>
          <template #content>
              <h2></h2>
              <div class="inf">
                  <label class="name">
                      {{ $t('auth.name') }}
                  </label>
                  <pv-input id="name" type="text" placeholder="user.name"></pv-input>
              </div>

              <div class="inf">
                  <label class="email">
                      {{ $t('auth.e-mail') }}
                  </label>
                  <pv-input id="e-mail" type="email" placeholder="user.email"></pv-input>
              </div>
              <div class="inf">
                  <label class="password">
                      {{ $t('auth.password') }}
                  </label>
                  <pv-input id="password" type="password" placeholder="*********"></pv-input>
              </div>
              <div class="pass">
                  <label class="password">
                      {{ $t('auth.new-password') }}
                  </label>
                  <pv-input id="password" type="password" placeholder="*********"></pv-input>
                  <label class="password">
                      {{ $t('auth.confirm-new-password') }}
                  </label>
                  <pv-input id="password" type="password" placeholder="*********"></pv-input>
                  <pv-button label="$t('auth.change-password')" rounded/>
              </div>
              <div class="phone">
                  <label class="phone">
                      {{ $t('auth.phone') }}
                  </label>
                  <pv-input id="phone" type="tel" placeholder="user.phone"></pv-input>
              </div>
          </template>
      </pv-card>
    </form>
</template>

<script>
export default {
    name: "user-profile",
    data() {
        return {
            user: {
                id: 1,
                name: "Name LastName super largo",
                password: "super-secure",
                profileImageUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/c3/a9/b9/c3a9b968-256b-dea6-e76c-d635f0bb2ee9/source/512x512bb.jpg",
                subTitle: "ACME Studios",
                email: "jobsync@gmail.com"
            }
        }
    }
}

</script>

<style scoped>

.image{
    display: block;
    width:150px;
    height:150px;
    border-radius:200px;
}
.panel{
    background: #949CA9;
}

.userinfo{
    background: white;
    border-radius: 10px;
    width: 40%;
    height: 50%;
    margin: auto;
    padding: 5px;
}

.inf{
    display: flex;
    margin: 15px;
    flex-direction: column;
    justify-content: center;
}

.inf label{
    font-weight: bold;
    font-size: 16px;
    margin: 5px;
}
.pass{
    display: flex;
    margin: 15px;
    flex-direction: column;
}
.pass label{
    font-weight: bold;
    font-size: 16px;
    margin: 5px;
}
</style>
