<template>
  <div class="SinglePost">
      <div class="jumbotron">
        <h6 class="display-4">{{post.title}}</h6>
        <p class="lead">{{post.text}}</p>
        <hr class="my-4">
        <p class="lead">
         
        </p>
    </div>
    <div class="comments">
        <h4>Comments: </h4>
       <ul class="list-group">
        <li class="list-group-item" v-for="comment in post.comments" :key="comment.id" >
          <p>{{comment.text}}</p> <br> <small>commented: {{comment.createdAt | diffForHumans()}}</small>
          </li>
      </ul>
      <CommentInput @submit="submit()" :newObj="newComment"/>
    </div>
    <div class='sugestedPost'>
       <SugestedPost />
    </div>
  </div>
</template>

<script>
import { posts } from "../services/PostService.js";
import { mixins } from "../mixins/DateMixin.js";
import CommentInput from "../components/CommentInput.vue";
import SugestedPost from "../components/SugestedPost.vue";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "SinglePost",
  components: {
    CommentInput,
    SugestedPost
  },
  mixins: [mixins],
  data() {
    return {
      post: {},
      newComment: { text: "" }
    };
  },
  methods: {
    submit() {
      posts.addComment(this.newComment, this.$route.params.id).then(() => {
        this.post.comments.push(this.newComment);
        this.newComment = { text: "" };
      });
    }
  },
  created() {
    posts.getSingle(this.$route.params.id).then(respones => {
      this.post = respones.data;
    });
  }
};
</script>

<style scoped>
.comments {
  width: 500px;
  margin: auto;
}
.sugestedPost {
  width: 300px;
  height: 300px;
  border: 3px solid #73ad21;
  border-radius: 20%;
}
</style>