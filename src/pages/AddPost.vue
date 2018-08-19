<template>
  <div class="AddPost">
     <h1>{{title}} Post</h1>
     <InputForm @submit="submit()" @reset="restartPost()"  :newObj="newPost"/>
  </div>
</template>

<script>
import { posts } from "../services/PostService.js";
import InputForm from "../components/InputForm.vue";

export default {
  name: "AddPost",
  components: {
    InputForm
  },
  data() {
    return {
      newPost: {
        title: "",
        text: ""
      },
      title: "Add"
    };
  },
  methods: {
    submit() {
      this.$route.params.id ? this.editPost() : this.addPost();
    },

    addPost() {
      posts.add(this.newPost).then(() => {
        return this.$router.push({ name: "posts" });
      });
    },

    editPost() {
      posts.edit(this.$route.params.id, this.newPost).then(() => {
        return this.$router.push({ name: "posts" });
      });
    },

    restartPost() {
      this.newPost = {
        text: "",
        title: ""
      };
    }
  },

  created() {
    if (this.$route.params.id) {
      posts.getSingle(this.$route.params.id).then(response => {
        this.newPost = response.data;
        this.title = "Edit";
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    this.newPost = { title: "", text: "" };
    this.title = "Add";
    next();
  }
};
</script>

<style scoped>
</style>