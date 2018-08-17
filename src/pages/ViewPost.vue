<template>
  <div id="ViewPost">
    <div class="container">
        <div class="jumbotron">
            <h1>{{singlePost.title}}</h1> 
            <p>{{singlePost.text}}</p> 
            <small>{{singlePost.createdAt}}</small> 
        </div>
    </div>
    <InputForm :title="title">
        <template>
            <input type="text">
        </template>
    </InputForm>
  </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";

export default {
  name: "ViewPost",
  components: {
    InputForm
  },
  data() {
    return {
      newComment: {
        text: ""
      },
      title: "Add Comment"
    };
  },
  computed: {
    singlePost() {
      return this.$store.getters.getSinglePost(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
</style>
