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
    <core-loader ref="loader" />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>
