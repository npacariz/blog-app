import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

import tinymce from "vue-tinymce-editor";
Vue.component("tinymce", tinymce);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
