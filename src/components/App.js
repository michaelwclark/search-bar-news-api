import React, { Component } from 'react';

import Search from '../containers/search';
import ParticularNews from './particular_news_render'
import Header from './header'


import LoadingBar from 'react-redux-loading-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <Search />
            < ParticularNews  />
      </div>
    );
  }
}

export default App;
