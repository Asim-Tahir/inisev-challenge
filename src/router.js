import Inbox from "./views/Inbox.vue.js"
import Archive from "./views/Archive.vue.js"

export const routes = [
  { path: '/inbox', component: Inbox },
  { path: '/archive', component: Archive },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
