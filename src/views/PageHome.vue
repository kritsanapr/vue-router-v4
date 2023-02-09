<script lang="ts" setup>
import { ref } from "vue";

const posts = ref<any>([]);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => (posts.value = json));
</script>
<template>
  <div class="container">
    <h1>Page Home</h1>
    <ul>
      <div class="card" v-for="(post, index) of posts" :key="index">
        <RouterLink :to="`/post/${post.id}`" class="router-link">
          ({{ post.id }}.) {{ post.title }}
        </RouterLink>
      </div>
    </ul>
  </div>
</template>

<style scoped>
body {
  scroll-behavior: smooth;
}
.card {
  padding: 1rem;
  margin: 1rem;
}
.card:hover {
  padding: 1rem;
  margin: 0.5rem;
}
.router-link {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
</style>
