<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>{{ $t("logIn") }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userData.username"
                prepend-icon="mdi-account"
                :label="$t('email')"
                name="E-mail"
              ></v-text-field>

              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                v-model="userData.password"
                :label="$t('password')"
                name="Password"
                @click:append="showPassword = !showPassword"
                id="password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <p v-if="!isValidate" class="font-weight-medium red--text">{{ $t("errorMsg") }}</p>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit"  @click="authenticate"> {{ $t("logIn") }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
      },
      showPassword: false,
      isValidate: true
    };
  },
  methods: {
    ...mapActions("userauth", ["setUser"]),

    authenticate() {
      // eslint-disable-next-line no-console
      console.log("Login");
      if (
        this.userData.username == "admin" &&
        this.userData.password == "admin"
      ) {
        const data = {
          access_token: "test123412323",
        };
        this.setUser(data);
        this.$router.push("/");
      }else{
        this.isValidate = false
      }
    },
  },
};
</script>
