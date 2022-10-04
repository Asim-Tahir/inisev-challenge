import App from "./App.vue.js"

import router from "./router.js"
import store from "./store/index.js";

Vue.createApp(App).use(router).use(store).mount("#app");
