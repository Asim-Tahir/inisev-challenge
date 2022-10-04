export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  template: `
    <dialog>
      <span>Close (esc)</span>
      <div>
        <button>Mark as read(r)</button>
        <button>Archive (a)</button>
        <h3>Your 7-figure</h3>
        <pre>
          Lorem ipsum dolor sit amet
        </pre>
      </div>
    </dialog>
  `,
};
