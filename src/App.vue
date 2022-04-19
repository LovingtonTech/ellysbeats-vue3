<template>
  <v-app>
    <v-navigation-drawer app> Drawer </v-navigation-drawer>

    <v-app-bar app> <NavBar /> </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      Footer
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style></style>
