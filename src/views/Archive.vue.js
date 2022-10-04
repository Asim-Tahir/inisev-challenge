export default {
  name: "Archive",
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapGetters({
      selectedMailsCount: "selectedArchivedMailsCount",
      mailsCount: "archiveMailsCount",
      mails: "archiveMails",
    }),
  },
  methods: {
    ...Vuex.mapMutations([
      "markSelectedArchiveAsRead",
      "markSelectedArchiveAsUnarchived",
      "toggleArchiveAsSelected",
      "toggleSelectedById",
      "updateMailDetail"
    ]),
  },
  inject: ["showModal"],
  template: `
      <h1 class="inbox__selected">Emails selected ({{ selectedMailsCount }})</h1>

      <div class="inbox__action">
        <input 
          type="checkbox"
          class="checkbox"
          :indeterminate="selectedMailsCount > 0 && selectedMailsCount < mailsCount"
          :checked="selectedMailsCount === mailsCount"
          @click="toggleArchiveAsSelected"
        />
        <button 
          class="btn-secondary"
          @click="markSelectedArchiveAsRead"
          @keydown.r="markSelectedArchiveAsRead"
        >
          Mark as read(r)
        </button>
        <button
          class="btn-secondary"
          @click="markSelectedArchiveAsUnarchived"
          @keydown.u="markSelectedArchiveAsUnarchived"
        >
          Unarchive (u)
        </button>
      </div>

      <div class="inbox__items">
        <div 
          class="inbox__item"
          :class="{'inbox__item--readed': mail.read}"
          v-for="mail in mails"
          :key="mail.id"
          @click="showModal(mail.id)"
        >
          <input 
            type="checkbox"
            class="checkbox"
            :checked="mail.selected"
            :readonly="mail.read"
            @click="toggleSelectedById(mail.id)"
          />
          <span>{{ mail.title }}</span>
        </div>
      </div>
  `,
};
