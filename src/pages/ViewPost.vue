<template>
  <div id="ViewPost">
    <div class="container">
        <div class="jumbotron">
            <h1>{{singlePost.title}}</h1> 
            <p>{{singlePost.text}}</p> 
            <small>{{singlePost.createdAt | formatDate()}}</small> 
        </div>
    </div>
    <div v-for="comment in singlePost.comments" :key="comment.id">
          <p>{{comment.text}}</p>
          <small>commented: {{comment.createdAt | diffForHumans()}}</small>
          <hr>
          <br>
    </div>
    <CommentForm @submit="submit" :newComment = "newComment"></CommentForm>
  </div>
</template>
<script>
import CommentForm from "../components/CommentForm.vue";
import { mixins } from "../mixins/DateMixin.js";
export default {
  name: "ViewPost",
  mixins: [mixins],
  components: {
    CommentForm
  },
  data() {
    return {
      newComment: {
        text: ""
      }
    };
  },
  methods: {
    submit() {
      let payload = { comment: this.newComment, id: this.singlePost.id };
      this.$store.dispatch("addComment", payload);
      this.newComment = {
        text: ""
      };
    }
  },
  computed: {
    singlePost() {
      return this.$store.getters.getSinglePost(this.$route.params.id);
    }
  },
  created() {
    this.$store.dispatch("getComments", this.$route.params.id);
  }
};
</script>

<style scoped>
</style>
