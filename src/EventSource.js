class EventSource {
  constructor() {
    this._listeners = [];
  }

  addListener(listener) {
    this._listeners.push(listener);
  }

  removeListener(listener) {
    const index = this._listeners.indexOf(listener);
    if(index === -1)
      return;

    this._listeners.splice(index, 1);
  }

  emit(...args) {
    this._listeners.forEach(listener => {
      listener(...args);
    });
  }
}
