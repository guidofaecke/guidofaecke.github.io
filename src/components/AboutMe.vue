<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center" class="ma-5" style="font-size: 3rem">
          <h1>Guido Faecke</h1>
        </v-row>
        <v-row justify="center" class="ma-5">
          <p class="">Hi, my name is Guido Faecke and I am a PHP Professional Service Consultant for <a href="https://www.perforce.com">Perforce</a>.</p>
          <p class="">On my <a href="https://github.com/guidofaecke">GitHub</a> account, I provide tips &amp; tricks for IBM i, as well as some solutions for Doctrine DBAL in regards to the IBM i.</p>
        </v-row>
        <v-row justify="center" class="ma-5">
          <v-btn @click="changeComponent('MyGithub')">
            <span>My GitHub</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
  methods: {
    changeComponent(component) {
      this.$emit("component", component);
    }
  }
}
</script>

<style scoped>

</style>