<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const message = ref("");
let countDown = ref<any>(5);
let timeout = 5000;

function onLogin() {
  message.value = "Login Success. wait for redirect... in 5";
  setTimeout(() => {
    router.push("/");
  }, timeout);
}
</script>

<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="onLogin" type="button" class="btn btn-primary">
      Login
    </button>
  </div>
</template>
