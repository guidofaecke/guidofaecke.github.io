<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center" class="ma-5" style="font-size: 3rem">
          <h1>Guido Faecke</h1>
        </v-row>
        <v-row justify="center" class="ma-5">
          <p class="">Hi, my name is Guido Faecke and I am a PHP Professional Service Consultant for <a href="https://www.perforce.com">Perforce</a>.</p>
          <p>Most of my day I spend helping IBM i customers upgrading Zend Server installations and migrate their code to the newly installed PHP version.</p>
          <p>In my spare time I tend to work on my libraries for Doctrine DBAL and Laminas-DB in regards to IBM i DB2 for PDO and/or ODBC.</p>
          <p class="">On my <a href="https://github.com/guidofaecke">GitHub</a> account, I also provide tips &amp; tricks for IBM i, as well as some solutions for Doctrine DBAL against DB2 on IBM i.</p>
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
