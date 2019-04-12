import React from 'react';
import ReactDOM from 'react-dom';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js'

class Playlist extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList /> */}
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
