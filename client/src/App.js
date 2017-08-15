import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import Search from './Search'

const defaultState = {
  search: '',
  results: {
    // whatever the data structure of youtubeAPI
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = defaultState;
    this.setSearchState = this.setSearchState.bind(this)
  }
  setSearchState(search) {
    this.setState({search})
  }
  render() {
    return (
      <div>
        <header>
          <h1>Send some videos</h1>
          <Search setSearchState={this.setSearchState} searchState={this.state.search}/>
        </header>
        {/*
          Make search
          Make some action stuff
          Make result display
          Use RxJS?
        */}
      </div>
    );
  }
}

export default App;
