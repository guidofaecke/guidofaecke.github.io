<template>
  <v-list v-if="Array.isArray(routes)">
    <MainNav
        v-for="route in routes"
        :routes="route"
        :key="route.name"
        :depth="depth + 1"
    />
  </v-list>
  <v-list-group
      v-else-if="routes.children"
      class="nav-list"
      :prepend-icon="routes.meta.icon"
      :sub-group="depth > 1"
      dark
  >
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>{{ routes.meta.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <MainNav
        v-for="route in routes.children"
        :routes="route"
        :key="route.name"
        :depth="depth + 1"
    />
  </v-list-group>
  <v-list-item
      :class="depth > 1 ? 'link' : 'top-link'"
      v-else
      :to="{ name: routes.name }"
      active-class="active"
      exact
  >
    <v-list-item-icon v-if="routes.meta.icon">
      <v-icon class="link-icon" v-text="routes.meta.icon" />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ routes.meta.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "MainNav",
  props: {
    routes: {
      type: [Array, Object],
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.active,
.nav-list .v-list-item--active {
  color: gray !important;
  background-color: rgba(0, 0, 0, 0) !important;
}

th.active > span {
  color: gray; /*rgba(0, 0, 0, 0.6);*/
}

.v-navigation-drawer--mini-variant .link {
  /*display: none;*/
}
</style>