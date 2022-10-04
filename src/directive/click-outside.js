export default {
  mounted(el, binding) {
    el.__click_outside_handler__ = (event) => {
      console.debug(
        "v-click-outside:",
        el === event.target,
        event.composedPath().includes(el),
        el.contains(event.target),
      );
      if (!(el === event.target || event.composedPath().includes(el))) {
        binding.value(event.target, el);
      }
    };
    document.body.addEventListener("click", el.__click_outside_handler__);
  },
  unmounted: (el) => {
    document.body.removeEventListener("click", el.__click_outside_handler__);
  },
};
