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
    },
    addPosts: (state, newPost) => {
      state.posts.push(newPost);
    }
  },
  actions: {
    getAllPosts: context => {
      posts.getAll().then(response => {
        context.commit("fillPosts", response.data);
      });
    },
    addPosts: (context, newPosts) => {
      posts.addPost(newPosts).then(() => {
        context.commit("addPosts", newPosts);
      });
    }
  },
  getters: {
    getSinglePost: state => id => {
      return state.posts.find(post => post.id === id);
    }
  }
});
