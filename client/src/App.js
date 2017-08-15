import React, { Component } from 'react';

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
    this.setSearchState.bind(this)
  }
  setSearchState(search) {
    this.setState({search})
  }
  render() {
    return (
      <div>
        <h1>Changed</h1>
        <Search setSearchState />
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
