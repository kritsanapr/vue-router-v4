<script lang="ts" setup>
import { RoutesInterface } from "../interfaces/Routes.interface";

const routes: RoutesInterface[] = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/login",
    name: "Login",
  },
  {
    to: "/register",
    name: "Register",
  },
];
</script>

<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item" v-for="(nav, index) of routes" :key="index">
            <RouterLink :to="nav.to" class="nav-link">{{
              nav.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <RouterView></RouterView> -->
  <slot></slot>
</template>
