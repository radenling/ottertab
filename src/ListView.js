class ListView {
  constructor(list, factory, elem) {
    this._elem = elem;
    this._factory = factory;
    this._views = [];
    list.forEach(item => this.addItem(item));
  }

  addItem(item) {
    const itemView = this._factory(item);
    this._elem.appendChild(itemView.getElement());
    this._views.push(itemView);
  }

  forEach(func) {
    this._views.forEach(func);
  }

  getItem(index) {
    return this._views[index];
  }
}
