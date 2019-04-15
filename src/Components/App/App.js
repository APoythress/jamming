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
    this.state = {SearchResults: [
      {
        name: 'song 1',
        artist: 'artist 1',
        album: 'album 1',
        id: 'id 1'
      },
      {
        name: 'song 2',
        artist: 'artist 2',
        album: 'album 2',
        id: 'id 2'
      }
    ],
    playlistName: 'Playlist Name Here',
    playlistTracks: [
    {
      name: 'Plist song 2',
      artist: 'Plist artist 2',
      album: 'Plist album 2',
      id: 'Plist id 2'
    },
    {
      name: 'Plist song 1',
      artist: 'Plist artist 1',
      album: 'Plist album 1',
      id: 'Plist id 1'
    }
  ]};

  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.addTrack = this.addTrack.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} onAdd={this.addTrack()} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
