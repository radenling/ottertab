class OtterTab {
  constructor(browserTabs) {
    this._browserTabs = browserTabs;
  }

  run() {
    const searchField = document.getElementById('search');

    this._browserTabs.get().then(tabs => {
      this._matchingTabs = new MatchingTabs(tabs);

      this._searchView = new SearchView(this._matchingTabs, searchField);
      this._searchView.onSelect.addListener(() => {
        this._matchingTabs.select();
      });

      const tabListElem = document.getElementsByClassName("tabs")[0];
      this._tabsView = new ListView(
        this._matchingTabs.getTabs(), tab => new TabView(tab), tabListElem
      );

      this._matchingTabs.onSelectChange.addListener(selected => {
        this._tabsView.forEach(view => view.highlight(false));
        const tabView = this._tabsView.getItem(selected);
        tabView.highlight(true);
      });

      this._matchingTabs.onSelected.addListener(() => window.close());
    });

    setTimeout(() => searchField.focus(), 200);
  }
}
