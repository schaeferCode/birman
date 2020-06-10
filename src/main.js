import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";

Vue.component("default-layout", DefaultLayout);
Vue.component("login-layout", LoginLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
