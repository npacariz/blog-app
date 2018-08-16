import Vue from "vue";
import VueRoute from "vue-router";
import AppPosts from "../pages/AppPosts.vue";

Vue.use(VueRoute);

const routes = [
  {
    path: "/",
    redirect: "/posts"
  },
  {
    path: "/posts",
    component: AppPosts,
    name: "posts"
  }
];

const router = new VueRoute({
  routes
});

export default router;
