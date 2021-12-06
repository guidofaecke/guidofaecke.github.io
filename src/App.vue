<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="PGP"
          class="shrink mr-2"
          contain
          :src="require('./assets/php.jpg')"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>
        <span class="mr-2">Guido Faecke</span>
    </v-app-bar>

    <v-main>
      <component @component="changeComponent" :name="selectedComponent" v-bind:is="selectedComponent"/>
    </v-main>
  </v-app>
</template>

<script>
import MyGithub from "./components/MyGithub";
import AboutMe from "./components/AboutMe";

export default {
  name: 'App',

  components: {
    MyGithub,
    AboutMe
  },

  data: () => ({
    selectedComponent: MyGithub
  }),
  methods: {
    changeComponent(component){
      this.selectedComponent = component;
    }
  }
};
</script>
