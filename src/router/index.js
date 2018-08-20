import Vue from "vue";
import VueRouter from "vue-router";
import AppPosts from "../pages/AppPosts.vue";
import ViewPost from "../pages/ViewPost.vue";
import AddPost from "../pages/AddPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts",
    name: "posts",
    component: AppPosts
  },
  {
    path: "/",
    redirect: { name: "posts" }
  },
  {
    path: "/add",
    name: "addpost",
    component: AddPost
  },
  {
    path: "/post/:id",
    component: ViewPost,
    name: "single"
  },
  {
    path: "/edit/:id",
    component: AddPost,
    name: "edit"
  }
];

const router = new VueRouter({
  routes
});
export default router;
