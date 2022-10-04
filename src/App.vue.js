import Modal from "./components/Modal.vue.js"

export default {
  computed: {
    ...Vuex.mapGetters([
      "selectedInboxMailsCount",
      "selectedArchivedMailsCount",
    ]),
    title() {
      return this.$route.path !== "/archive" ? "Inbox" : "Archive";
    },
  },
  components: {
    Modal,
  },
  template: `
    <aside class="sidebar">
      <nav>
        <router-link
          class="btn"
          to="/inbox"
        >
            Inbox ({{ selectedInboxMailsCount }})
          </router-link>
        <router-link
          class="btn"
          to="/archive"
        >
            Archive ({{ selectedArchivedMailsCount }})
        </router-link>
      </nav>
      <button class="btn">Logout</button>
    </aside>
    <main class="inbox">
      <h2 class="inbox__title">{{ title }}</h2>
      <Modal :id="0"></Modal>
      <router-view></router-view>
    </main>
  `,
};
