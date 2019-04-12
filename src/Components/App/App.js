import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {SearchResults: [{
        name: 'song 1',
        artist: 'artist1',
        album: 'album1',
        id: 'id1'
      }]};
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults="{this.state.searchResults}" />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
