import Vue from "vue";
import VueRoute from "vue-router";
import AppPosts from "../pages/AppPosts.vue";
import ViewPost from "../pages/ViewPost.vue";

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
  },

  {
    path: "/post/:id",
    component: ViewPost,
    name: "single"
  }
];

const router = new VueRoute({
  routes
});

export default router;
