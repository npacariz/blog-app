<template>
  <div class="InputForm">
     <form @submit.prevent="submit()">

              <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="text" class="form-control" minlength="2" required v-model='newObj.title'>
              </div>
              <div class="form-group">
                  <label>Text</label>
                <tinymce id="d1" type="text" class="form-control"  required  maxlength="300" v-model='newObj.text'></tinymce>
              </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="reset" class="btn btn-warning" @click='reset()'>Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: ["newObj"],
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

<style scoped>
</style>
