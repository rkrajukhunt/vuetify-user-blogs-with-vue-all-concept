<template>
 <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/')">
        <span>{{ $t('title') }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <select v-model="locale">
        <option value="en">English</option>
        <option value="jp">Japansse</option>
      </select>
      <router-link to="/">
        <v-btn text @submit.prevent>
          <span class="mr-2">{{ $t('home') }}</span>
        </v-btn>
        <v-btn text @click="logout">
          <span class="mr-2">{{ $t('logout') }}</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    ...mapActions('userauth', ['resetUser']),
    logout(){
      this.resetUser()
      this.$router.push('/login')
    }
  }
}
</script>
