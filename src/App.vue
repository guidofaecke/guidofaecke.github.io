<template>
  <v-app>
    <v-navigation-drawer app>
      <main-nav :routes="routes"/>
    </v-navigation-drawer>
<!--    <v-app-bar app>-->
<!--&lt;!&ndash;      <main-nav :routes="routes"/>&ndash;&gt;-->
<!--    </v-app-bar>-->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  <v-footer app>
    <Footer/>
  </v-footer>
  </v-app>
</template>

<script>
import routes from "./router/routes";
import MainNav from "./components/main-nav";
import Footer from "./views/Footer";

export default {
  components: {
    MainNav,
    Footer
  },
  data: () => ({
    routes,
    nav: false
  })
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .content {
    margin: 12px;
  }
}
</style>
