<template>
  <div class="SugestedPost">
    <h2>Sugested Posts</h2>
        <h4 >{{post.title}}</h4>
          <router-link class="btn btn-primary btn-lg" :to="{name:'single', params :{id: post.id}}" replace >See More</router-link>
        
      
  </div>
</template>

<script>
import { posts } from "../services/PostService.js";

export default {
  name: "SugestedPost",
  props: ["id"],
  data() {
    return {
      post: {}
    };
  },
  created() {
    posts.getAll().then(respones => {
      let posts = respones.data;
      posts = posts.filter(pos => pos.id != this.id);
      console.log(posts);
      this.post = posts[Math.floor(Math.random() * posts.length)];
    });
  }
};
</script>

<style scoped>
</style>
