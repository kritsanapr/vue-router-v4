<script lang="ts" setup>
import { RoutesInterface } from "../interfaces/Routes.interface";
import { PostsInterface } from "../interfaces/Posts.interface";

import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const post = ref<PostsInterface | null>(null);
const postId = route.params.postId;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((json) => (post.value = json));
</script>

<template>
  <div class="container">
    <!-- <h1>Post ID : {{ postId }}</h1> -->
    <div class="card">
      <h2>{{ post?.title }}</h2>
      <hr />
      <p>{{ post?.body }}</p>
      <h3>Comments</h3>
      <pre>
              {{ post }}
        </pre
      >
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  margin: 1rem;
}
</style>
