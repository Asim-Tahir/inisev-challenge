export default {
  data() {
    return {};
  },
  methods: {},
  template: `
      <h1 class="inbox__selected">Emails selected (2)</h1>

      <div class="inbox__action">
        <input type="checkbox" indeterminate class="checkbox"/>
        <button class="btn-secondary">Mark as read (r)</button>
        <button class="btn-secondary">Archive (a)</button>
      </div>

      <div class="inbox__items">
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item">
          <input type="checkbox" class="checkbox" />
          <span>Your 7-figure plan goes</span>
        </label>
        <label class="inbox__item inbox__item--readed">
          <input type="checkbox" class="checkbox" readonly />
          <span>Your 7-figure plan goes</span>
        </label>
      </div>
  `,
};
