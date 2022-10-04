export default Vuex.createStore({
  state: () => ({
    mails: [
      {
        id: 0,
        title: "Lorem ipsum",
        description: "Lorem ipsum doolr sit ameat",
        read: false,
        archived: false,
        selected: false,
      },
      {
        id: 1,
        title: "Lorem ipsum",
        description: "Lorem ipsum doolr sit ameat",
        read: true,
        archived: false,
        selected: true,
      },
      {
        id: 2,
        title: "Lorem ipsum",
        description: "Lorem ipsum doolr sit ameat",
        read: false,
        archived: true,
        selected: true,
      },
      {
        id: 3,
        title: "Lorem ipsum",
        description: "Lorem ipsum doolr sit ameat",
        read: true,
        archived: true,
        selected: false,
      },
    ],
  }),
  getters: {
    readeds(state) {
      return state.mails.filter((mail) => mail.read === true);
    },
    readedsCount(_state, getters) {
      return getters.readeds.length;
    },
    archiveds(state) {
      return state.mails.filter((mail) => mail.archived === true);
    },
    archivedsCount(_state, getters) {
      return getters.archiveds.length;
    },
    selecteds(state) {
      return state.mails.filter((mail) => mail.selected === true);
    },
    selectedsCount(_state, getters) {
      return getters.selecteds.length;
    },
  },
  mutations: {
    markAsRead(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.read = true;
      return mail;
    },
    markAllAsRead(state) {
      state.mails.map((mail) => {
        mail.read = true;
      });
    },
    markAsUnread(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.read = false;
      return mail;
    },
    markAsArchive(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.archive = true;
      return mail;
    },
    markAllAsArchive(state) {
      state.mails.map((mail) => {
        mail.archived = true;
      });
    },
    markAsUnarchive(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.archive = false;
      return mail;
    },
    select(state, id) {
      const mail = state.mails.find((mail) => mail.id === id);
      mail.selected = true;
    },
  },
});
