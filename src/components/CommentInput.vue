<template>
  <div class="InputForm">
     <form @submit.prevent="submit()">
        <div class="form-group">
            <label>Comment: </label>
            <textarea type="text" class="form-control"  required  maxlength="300" v-model='newObj.text'></textarea>
        </div>
        <div  class="form-group">
          <vue-recaptcha sitekey="6LeygGoUAAAAADjDtiPrnORLA-0z2UCzyThldHws"></vue-recaptcha>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "InputForm",
  props: ["newObj"],
  components: {
    VueRecaptcha
  },
  methods: {
    submit() {
      if (grecaptcha.getResponse()) {
        this.$emit("submit");
        grecaptcha.reset();
      }
    }
  }
};
</script>

<style scoped>
</style>
