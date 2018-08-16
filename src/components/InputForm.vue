<template>
    <div id="InputForm">
        <form @submit.prevent='submit()'>
        <div class="form-group">
            <label for="usr">Title:</label>
            <input type="text" class="form-control" v-model="newPost.title" required minlength='2'>
        </div>
        <div class="form-group">
            <label for="pwd">Body</label>
            <textarea type="text" class="form-control" v-model="newPost.text" required maxlength="300"></textarea>
        </div>
        <button type="submit" class='btn btn-success'>Submit</button>
        <button type="reset" @click="reset" class='btn btn-warning'>Reset</button>
         </form>
    </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    newPost: Object
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    reset() {
      this.$emit("reset");
    }
  }
};
</script>

<style>
</style>
