<template>
  <div id="ViewPost">
    <div class="container">
        <div class="jumbotron">
            <h1>{{singlePost.title}}</h1> 
            <p>{{singlePost.text}}</p> 
            <small>{{singlePost.createdAt}}</small> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewPost",

  computed: {
    singlePost() {
      return this.$store.getters.getSinglePost(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
</style>
