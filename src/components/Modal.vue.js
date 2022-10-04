export default {
  computed: {
    ...Vuex.mapState({ mail: "mailDetail" }),
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
  mounted() {
    // For Development
    this.showModal();
  },
  template: `
    <dialog 
      class="modal"
      ref="dialog"
      v-click-outside="closeModal"
      @mail-detail="showModal"
    >
      <u class="modal__close" @click="closeModal">
        Close (esc)
      </u>
      <div class="modal__actions">
        <button
          class="btn-secondary"
          @click="updateMailDetail({ read: true })"
          @keydown.c.window="updateMailDetail({ read: true })"
        >
          Mark as read(r)
        </button>
        <button
          class="btn-secondary"
          @click="updateMailDetail({ archived: true })"
          @keydown.a.window="updateMailDetail({ archived: true })"
        >
          Archive (a)
        </button>
      </div>
      <article class="modal__content">
        <h3>{{ mail.title }}</h3>
        <p>{{ mail.description }}</p>
      </article>
    </dialog>
  `,
};
