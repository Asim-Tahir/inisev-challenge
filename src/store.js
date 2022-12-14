/**
 * @typedef {{ id: number, title: string, description: string, read: boolean, archived: boolean, selected: boolean }} Mail
 * @typedef {{ currentMailID: number, mails: Array<Mail> }} State
 */
export default Vuex.createStore({
  /**
   * Store State
   * @returns {State}
   */
  state: () => ({
    currentMailID: -1,
    mails: [
      {
        id: 0,
        title: "Lorem ipsum 0",
        description: "Lorem ipsum 0 doolr sit ameat",
        read: false,
        archived: false,
        selected: false,
      },
      {
        id: 1,
        title: "Lorem ipsum 1",
        description: "Lorem ipsum 1 doolr sit ameat",
        read: true,
        archived: false,
        selected: true,
      },
      {
        id: 2,
        title: "Lorem ipsum 2",
        description: "Lorem ipsum 2 doolr sit ameat",
        read: false,
        archived: true,
        selected: true,
      },
      {
        id: 3,
        title: "Lorem ipsum 3",
        description: "Lorem ipsum 3 doolr sit ameat",
        read: true,
        archived: true,
        selected: false,
      },
    ],
  }),
  getters: {
    /**
     * Inbox Mails
     * @param {State} state
     * @returns {Array<Mail>}
     */
    inboxMails(state) {
      return state.mails.filter((mail) => mail.archived === false);
    },
    /**
     * Inbox Mail Count
     * @param {State} _state
     * @param {typeof this} getters
     * @returns {number}
     */
    inboxMailsCount(_state, getters) {
      return getters.inboxMails.length;
    },
    /**
     * Archived Mails
     * @param {State} state
     * @param {typeof this} getters
     * @returns {Array<Mail>}
     */
    archiveMails(state) {
      return state.mails.filter((mail) => mail.archived === true);
    },
    /**
     * Archived Mails Count
     * @param {State} _state
     * @param {typeof this} getters
     * @returns {number}
     */
    archiveMailsCount(_state, getters) {
      return getters.archiveMails.length;
    },
    /**
     * Selected Inbox Mails
     * @param {State} state
     * @param {typeof this} getters
     * @returns {Array<Mail>}
     */
    selectedInboxMails(state) {
      return state.mails.filter((mail) => mail.selected && !mail.archived);
    },
    /**
     * Selected
     * @param {State} _state
     * @param {typeof this} getters
     * @returns {number}
     */
    selectedInboxMailsCount(_state, getters) {
      return getters.selectedInboxMails.length;
    },
    /**
     * Selected Archived Mails
     * @param {State} state
     * @param {typeof this} getters
     * @returns {Array<Mail>}
     */
    selectedArchivedMails(state) {
      return state.mails.filter((mail) => mail.selected && mail.archived);
    },
    /**
     * Selected Archived Mails Count
     * @param {State} state
     * @param {typeof this} getters
     * @returns {number}
     */
    selectedArchivedMailsCount(_state, getters) {
      return getters.selectedArchivedMails.length;
    },
    /**
     * Get Mail By ID
     * @param {State} state
     * @param {typeof this} getters
     * @returns {(id: number) => Mail}
     */
    getMailByID: (state) => (id) => state.mails.find((mail) => mail.id === id),
    /**
     * Get Mail By Current Mail ID
     * @param {State} state
     * @param {typeof this} getters
     * @returns {Mail}
     */
    currentMail(state) {
      return state.mails.find((mail) => mail.id === state.currentMailID);
    },
  },
  mutations: {
    /**
     * Update mail detail
     * @param {State} state
     * @param {Partial<Mail>} mail
     */
    updateCurrentMailID(state, id) {
      state.currentMailID = id;
    },
    /**
     * Mark as Read by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsReadByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.read = true;
      return mail;
    },
    /**
     * Mark as Unread by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsUnreadByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.read = false;
      return mail;
    },
    /**
     * Mark as Archived by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsArchivedByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.archived = true;
      return mail;
    },
    /**
     * Mark as Unarchived by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsUnarchivedByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.archived = false;
      return mail;
    },
    /**
     * Mark as Selected by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsSelectedByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.selected = true;
      return mail;
    },
    /**
     * Mark as Unselected by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    markAsUnselectedByID(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.selected = false;
      return mail;
    },
    /**
     * Mark selected Inbox as Read
     * @param {State} state
     * @returns {Mail}
     */
    markSelectedInboxAsRead(state) {
      state.mails.map((mail) => {
        if (mail.selected) {
          mail.read = true;
        }
      });
    },
    /**
     * Mark selected Archive as Read
     * @param {State} state
     * @returns {Mail}
     */
    markSelectedArchiveAsRead(state) {
      state.mails.map((mail) => {
        if (mail.selected) {
          mail.read = true;
        }
      });
    },
    /**
     * Mark selected Inbox as Archived
     * @param {State} state
     * @returns {Mail}
     */
    markSelectedInboxAsArchived(state) {
      state.mails.map((mail) => {
        if (mail.selected) {
          mail.archived = true;
        }
      });
    },
    /**
     * Mark selected Archive as Unarchived
     * @param {State} state
     */
    markSelectedArchiveAsUnarchived(state) {
      state.mails.map((mail) => {
        if (mail.selected) {
          mail.archived = false;
        }
      });
    },
    /**
     * Toggle all Inbox as Selected
     * @param {State} state
     * @returns {void}
     */
    toggleInboxAsSelected(state) {
      const inboxMails = state.mails.filter((mail) => !mail.archived);
      const unselectedInboxMails = inboxMails.filter((mail) => !mail.selected);

      if (unselectedInboxMails.length > 0) {
        unselectedInboxMails.map((mail) => (mail.selected = true));
      } else {
        inboxMails.map((mail) => (mail.selected = false));
      }
    },
    /**
     * Toggle all Archive as Selected
     * @param {State} state
     * @returns {void}
     */
    toggleArchiveAsSelected(state) {
      const archiveMails = state.mails.filter((mail) => mail.archived);
      const unselectedArchiveMails = archiveMails.filter(
        (mail) => !mail.selected
      );

      if (unselectedArchiveMails.length > 0) {
        unselectedArchiveMails.map((mail) => (mail.selected = true));
      } else {
        archiveMails.map((mail) => (mail.selected = false));
      }
    },
    /**
     * Toggle selected by ID
     * @param {State} state
     * @param {number} id
     * @returns {Mail}
     */
    toggleSelectedById(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.selected = !mail.selected;
      return mail;
    },
  },
});
