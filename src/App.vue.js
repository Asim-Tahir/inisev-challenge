export default {
  computed: {
    ...Vuex.mapGetters([
      "selectedInboxMailsCount",
      "selectedArchivedMailsCount",
      "currentMail",
    ]),
    title() {
      return this.$route.path !== "/archive" ? "Inbox" : "Archive";
    },
  },
  methods: {
    showModal(id) {
      this.$store.commit("updateCurrentMailID", id);
      
      this.$refs.dialog.showModal();
    },
    closeModal() {
      this.$refs.dialog.close();
    },
  },
  provide() {
    return { showModal: this.showModal };
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
      <router-view></router-view>
    </main>

    <dialog
      ref="dialog"
      class="modal"
      v-click-outside="closeModal"
    >
      <u class="modal__close" @click="closeModal">
        Close (esc)
      </u>
      <div class="modal__actions">
        <button
          class="btn-secondary"
          @click="markAsReadByID(currentMail.id)"
          @keydown.c="markAsReadByID(currentMail.id)"
        >
          Mark as read(r)
        </button>
        <button
          class="btn-secondary"
          @click="markAsArchivedByID(currentMail.id)"
          @keydown.a="markAsArchivedByID(currentMail.id)"
        >
          Archive (a)
        </button>
      </div>
      <article class="modal__content">
        <h3>{{ currentMail?.title ?? "" }}</h3>
        <p>{{ currentMail?.description ?? "" }}</p>
      </article>
    </dialog>
  `,
};
