import React, { Component } from 'react';

import Search from '../containers/search';
import ParticularNews from './particular_news_render'
class App extends Component {
  render() {
    return (
      <div className="App">
            <Search />
            < ParticularNews  />
      </div>
    );
  }
}

export default App;
