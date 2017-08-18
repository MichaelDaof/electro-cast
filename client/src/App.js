import React, { Component } from 'react';

import Search from './Search'
import Drake from './Drake'
import VideoList from './VideoList'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <header>
          <h1>Send some videos</h1>
          <Search />
        </header>
        {/*
          Make search
          Make some action stuff
          Make result display
          Use RxJS?
        */}
        <Drake />
        <VideoList />
      </div>
    );
  }
}

export default App;
