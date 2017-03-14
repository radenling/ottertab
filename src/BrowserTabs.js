class BrowserTabs {
  get() {
    return browser.tabs.query({ currentWindow: true })
      .then(tabs =>tabs.map(tab => new Tab(tab.id, tab.title, tab.url)));
  }
}
