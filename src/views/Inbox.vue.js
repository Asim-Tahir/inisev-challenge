export default {
  data() {
    return {};
  },
  methods: {},
  template: `
      <div class="inbox__action">
        <input type="checkbox"/>
        <button class="btn">Mark as read (r)</button>
        <button class="btn">Archive (a)</button>
      </div>

      <div class="inbox__item">
        <label>
          <input type="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
      </div>
      <div class="inbox__item inbox__item--readed">
        <label>
          <input type="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
      </div>
  `,
};
