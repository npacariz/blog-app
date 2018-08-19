<template>
  <div class="AppPosts">
      <PostList :posts="posts" @deletePost="deletePost"/>
  </div>
</template>

<script>
import { posts } from "../services/PostService.js";
import PostList from "../components/PostList.vue";
export default {
  name: "AppPosts",
  components: {
    PostList
  },

  data() {
    return {
      posts: []
    };
  },
  methods: {
    deletePost(id) {
      posts.delete(id).then(() => {
        this.posts = this.posts.filter(post => post.id != id);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    posts.getAll().then(response => {
      next(vm => {
        vm.posts = response.data;
      });
    });
  }
};
</script>

<style scoped>
</style>
