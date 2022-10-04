export default {
  computed: {
    title() {
      return this.$route.path !== "/archive" ? "Inbox" : "Archive";
    }
  },
  template: `
    <aside class="sidebar">
      <nav>
        <router-link class="btn" to="/inbox">Inbox (3)</router-link>
        <router-link class="btn" to="/archive">Archive (0)</router-link>
      </nav>
      <button class="btn">Logout</button>
    </aside>
    <main class="inbox">
      <h2 class="inbox__title">{{ title }}</h2>
      <router-view></router-view>
    </main>
  `
}
