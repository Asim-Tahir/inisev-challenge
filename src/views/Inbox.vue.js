export default {
  name: "Inbox",
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState(["mails"]),
    ...Vuex.mapGetters(["selectedsCount"]),
  },
  methods: {
    ...Vuex.mapMutations(["markAllAsRead", "markAllAsArchive"]),
  },
  template: `
      <h1 class="inbox__selected">Emails selected ({{ selectedsCount }})</h1>

      <div class="inbox__action">
        <input type="checkbox" :indeterminate="selectedsCount > 0" class="checkbox"/>
        <button class="btn-secondary">Mark as read (r)</button>
        <button class="btn-secondary">Archive (a)</button>
      </div>

      <div class="inbox__items">
        <label 
          class="inbox__item"
          :class="{'inbox__item--readed': mail.read}"
          v-for="mail in mails"
          :key="mail.id"
        >
          <input type="checkbox" class="checkbox" :checked="mail.selected" :readonly="mail.read" />
          <span>{{ mail.title }}</span>
        </label>
      </div>
  `,
};
