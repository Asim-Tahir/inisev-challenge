import App from "./App.vue.js";

import router from "./router.js";
import store from "./store.js";

import clickOutside from "./directive/click-outside.js";

Vue.createApp(App)
  .use(router)
  .use(store)
  .directive("clickOutside", clickOutside)
  .mount("#app");
