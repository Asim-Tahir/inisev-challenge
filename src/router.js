import Home from "./components/Home.vue.js"
import Inbox from "./components/Inbox.vue.js"
import Archive from "./components/Archive.vue.js"

export const routes = [
  { path: '/', component: Home },
  { path: '/inbox', component: Inbox },
  { path: '/archive', component: Archive },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
