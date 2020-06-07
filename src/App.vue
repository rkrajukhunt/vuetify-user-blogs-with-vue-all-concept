<template>
 <v-app>
    <core-loader ref="loader" />
    <router-view/>
 </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters('userauth', {
      userLoggedIn: 'userLoggedIn'
    })
  },
  data () {
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  mounted(){
    this.$root.$loader = this.$refs.loader.show
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
