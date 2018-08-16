<template>
    <div id="AddPost">
        <InputForm :newPost="newPost" @submit ="addPost" />
  
    </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";
export default {
  name: "AddPost",
  components: {
    InputForm
  },
  props: ["posts"],
  data() {
    return {
      newPost: {
        text: "",
        title: ""
      }
    };
  },
  methods: {
    addPost() {
      this.$store.dispatch("addPosts", this.newPost);
      this.$router.push("/posts");
    }
  }
};
</script>

<style>
</style>
