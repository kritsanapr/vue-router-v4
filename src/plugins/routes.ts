import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: () => import("../views/PageHome.vue") },
    { path: "/login", component: () => import("../views/PageLogin.vue") },
    { path: "/register", component: () => import("../views/PageRegister.vue") },
    {
      path: "/post/:postId",
      component: () => import("../views/PagePost.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
