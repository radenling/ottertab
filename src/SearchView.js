class SearchView {
  constructor(tabs, searchField) {
    this._tabs = tabs;
    this._elem = searchField;

    this.onSelect = new EventSource();

    this._elem.addEventListener('change', ev => this.handleChange(ev));
    this._elem.addEventListener('keyup', ev => this.handleKey(ev));
  }

  handleChange(ev) {
    this._tabs.match(this._elem.value);
  }

  handleKey(ev) {
    if(ev.key == "Enter")
      this.onSelect.emit();
    else
      this.handleChange(ev);
  }
}
