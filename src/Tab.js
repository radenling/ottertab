class Tab {
  constructor(id, title, url) {
    this._id = id;
    this._title = title;
    this._url = url;
    this._matching = true;

    this.onMatchingChange = new EventSource();
  }

  getTitle() {
    return this._title;
  }

  getUrl() {
    return this._url;
  }

  activate() {
    // TODO Move this to an outer layer
    browser.tabs.update(this._id, { active: true });
  }

  match(text) {
    const respectCase = !!text.match(/[A-Z]/);
    const words = text.split(' ').filter(chunk => chunk != '');
    const pattern = words.join('.*');
    const reFlags = ['g', respectCase ? '' : 'i'];
    const re = new RegExp(pattern, reFlags.join(''));
    if(this._title.match(re))
      this.setMatching(true);
    else
      this.setMatching(false);
  }

  isMatching() {
    return this._matching;
  }

  setMatching(matching) {
    if(this._matching === matching)
      return;

    this._matching = matching;
    this.onMatchingChange.emit(this);
  }
}
