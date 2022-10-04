export default {
  name: "Inbox",
  computed: {
    ...Vuex.mapGetters({
      selectedMailsCount: "selectedInboxMailsCount",
      mailsCount: "inboxMailsCount",
      mails: "inboxMails",
    }),
  },
  methods: {
    ...Vuex.mapMutations([
      "toggleSelectedById",
      "toggleInboxAsSelected",
      "markSelectedInboxAsRead",
      "markSelectedInboxAsArchived",
      "updateMailDetail",
    ]),
  },
  template: `
    <h1 class="inbox__selected">Emails selected ({{ selectedMailsCount }})</h1>

    <div class="inbox__action">
      <input 
        type="checkbox"
        class="checkbox"
        :indeterminate="selectedMailsCount > 0 && selectedMailsCount < mailsCount"
        :checked="selectedMailsCount === mailsCount"
        @click="toggleInboxAsSelected"
      />
      <button 
        class="btn-secondary"
        @click="markSelectedInboxAsRead"
        @keydown.r="markSelectedInboxAsRead"
      >
        Mark as read (r)
      </button>
      <button 
        class="btn-secondary"
        @click="markSelectedInboxAsArchived"
        @keydown.a="markSelectedInboxAsArchived"
      >
        Archive (a)
      </button>
    </div>

    <div class="inbox__items">
      <div 
        class="inbox__item"
        :class="{'inbox__item--readed': mail.read}"
        v-for="mail in mails"
        :key="mail.id"
        @click="showMailDetail(mail)"
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
