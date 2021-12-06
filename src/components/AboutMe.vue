<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center" class="ma-5">
          <span>About me</span>
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