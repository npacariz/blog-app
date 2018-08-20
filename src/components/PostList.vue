<template>
  <div class="PostList">
      <h1>All Posts</h1>
    <div class="jumbotron" v-for= "post in posts" :key="post.id">
        <h6 class="display-4">{{post.title}}</h6>
         <p class="small">Created at: {{post.createdAt | formatDate()}} <br> Comments: {{post.comments.length}}</p>
         <p class="lead" v-html="post.text"></p>
        <hr class="my-4">
        <p class="lead">
        <router-link class="btn btn-primary btn-lg" :to="{name:'single', params :{id: post.id}}" >View Post</router-link>
        <router-link class="btn btn-warning btn-lg" :to="{name:'edit', params :{id: post.id}}" >Edit Post</router-link>
        <button class="btn btn-danger btn-lg" @click="deletePost(post.id)">Delete</button>
        </p>
    </div>
  </div>
</template>

<script>
import { mixins } from "../mixins/DateMixin.js";
export default {
  name: "PostList",
  props: ["posts"],
  mixins: [mixins],
  methods: {
    deletePost(id) {
      this.$emit("deletePost", id);
    }
  }
};
</script>

<style scoped>
</style>
