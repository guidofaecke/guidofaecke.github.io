<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center" class="ma-5">
          <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
        <v-row justify="center" class="ma-5">
          <v-btn @click="changeComponent('AboutMe')">
            <span>About Me</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyGithub",
  data: () => ({
    ecosystem: [
      {
        text: 'Tips and Tricks on IBM i',
        href: 'https://github.com/guidofaecke/ibmi_tips',
      }
    ]
  }),
  methods: {
    changeComponent(component) {
      this.$emit("component", component);
    }
  }
}
</script>

<style scoped>

</style>