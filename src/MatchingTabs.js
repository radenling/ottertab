class MatchingTabs {
  constructor(tabs) {
    this._tabs = tabs;
    this._filter = '';
    this._selected = null;

    this.onSelectChange = new EventSource();
    this.onSelected = new EventSource();
  }

  match(text) {
    this._filter = text;
    this._tabs.forEach(tab => tab.match(text));

    this._selected = this._getSelectedIndex();
    this.onSelectChange.emit(this._selected);
  }

  getTabs() {
    return this._tabs;
  }

  select() {
    this._tabs[this._selected].activate();
    this.onSelected.emit();
  }

  _getSelectedIndex() {
    const firstVisible = this._tabs.find(tab => tab.isMatching());
    return this._tabs.indexOf(firstVisible);
  }
}
