<template>
<div>

    <div class="blog-post" v-for="post in posts" :key="post.id">
        <h2 class="blog-post-title">{{post.title}}</h2>
            <p class="blog-post-meta">{{post.createdAt}}</p>
            <p>{{post.text}}</p>
            <router-link :to="{name:'single', params:{id: post.id}}">View Post</router-link>
            <hr>
     </div>
</div>
</template>

<script>
export default {
  props: ["posts"]
};
</script>

<style>
</style>
