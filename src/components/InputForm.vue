<template>
    <div id="InputForm">
        <h3>{{title}}</h3>
        <form @submit.prevent='submit()'>
        <slot>
        <div class="form-group">
            <label for="usr">Title:</label>
            <input type="text" class="form-control" v-model="newObj.title" required minlength='2'>
        </div>
        <div class="form-group">
            <label for="pwd">Body</label>
            <textarea type="text" class="form-control" v-model="newObj.text" required maxlength="300"></textarea>
        </div>
        </slot>
        <button type="submit" class='btn btn-success'>{{title}}</button>
        <button type="reset" @click="reset" class='btn btn-warning'>Reset</button>
         </form>
    </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    newObj: Object,
    title: String
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
