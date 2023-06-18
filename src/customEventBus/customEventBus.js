const customEventBus = {
  on(eventName, callback) {
    document.addEventListener(
      eventName,
      (e) => {
        e.stopImmediatePropagation();
        callback(e.detail);
      },
      false
    );
  },
  dispatchEvent(eventName, data) {
    document.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  },
  remove(eventName, callback) {
    document.removeEventListener(eventName, callback);
  },
};

export default customEventBus;
