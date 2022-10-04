export default {
  computed: {
    ...Vuex.mapState({ mail: "mailDetail" }),
    ...Vuex.mapGetters([
      "selectedInboxMailsCount",
      "selectedArchivedMailsCount",
    ]),
    title() {
      return this.$route.path !== "/archive" ? "Inbox" : "Archive";
    },
  },
  methods: {
    ...Vuex.mapMutations(["updateMailDetail"]),
    showModal() {
      this.$refs.dialog.showModal();
    },
    closeModal() {
      this.$refs.dialog.close();
    },
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
      <dialog
        open
        class="modal"
        ref="dialog"
        v-click-outside="closeModal"
      >
        <u class="modal__close" @click="closeModal">
          Close (esc)
        </u>
        <div class="modal__actions">
          <button
            class="btn-secondary"
            @click="updateMailDetail({ read: true })"
            @keydown.c="updateMailDetail({ read: true })"
          >
            Mark as read(r)
          </button>
          <button
            class="btn-secondary"
            @click="updateMailDetail({ archived: true })"
            @keydown.a="updateMailDetail({ archived: true })"
          >
            Archive (a)
          </button>
        </div>
        <article class="modal__content">
          <h3>{{ mail.title }}</h3>
          <p>{{ mail.description }}</p>
        </article>
      </dialog>

      <h2 class="inbox__title">{{ title }}</h2>
      <router-view></router-view>
    </main>
  `,
};
