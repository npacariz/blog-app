import Vue from "vue";
import Vuex from "vuex";
import { posts } from "../services/PostsService.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    fillPosts: (state, posts) => {
      state.posts = posts;
    }
  },
  actions: {
    getAllPosts: context => {
      posts.getAll().then(response => {
        context.commit("fillPosts", response.data);
      });
    }
  }
});
