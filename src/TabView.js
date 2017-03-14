class TabView {
  constructor(tab) {
    this._tab = tab;
    const container = document.createElement('li');
    container.className = 'tab';
    container.innerHTML =
      `<span class="title">${tab.getTitle()}</span>` +
      `<span class="url">${tab.getUrl()}</span>`;

    this._elem = container;

    tab.onMatchingChange.addListener(tab => this.updateVisiblity());
  }

  getElement() {
    return this._elem;
  }

  updateVisiblity() {
    if(this._tab.isMatching())
      this._elem.style.display = null;
    else
      this._elem.style.display = 'none';
  }

  highlight(highlight) {
    if(highlight)
      this._elem.style.background = "yellow";
    else
      this._elem.style.background = null;
  }
}
