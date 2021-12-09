<template>
  <div class="home">
    <template>
      <v-row v-for="(eco, i) in ecosystem"
             :key="i">
        <v-col cols="12" md="12">
            <a
                :href="eco.href"
                class="subheading mx-3"
                target="_blank"
            >
              {{ eco.text }}
            </a>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    ecosystem: [
      {
        text: 'Tips and Tricks on IBM i',
        href: 'https://github.com/guidofaecke/ibmi_tips',
      },
      {
        text: 'BaseUrl - This package detects base URL of web application',
        href: 'https://github.com/guidofaecke/blast-base-url',
      },
      {
        text: 'Doctrine DBAL IBM i Linux - Use odbc_ commands against IBM i DB2 within a Linux deployment',
        href: 'https://github.com/guidofaecke/doctrine-dbal-ibmi-linux',
      }
    ]
  })
  ,}
</script>
