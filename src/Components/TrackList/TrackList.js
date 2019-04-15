import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id} name={track.name} album={track.album} artist={track.artist} onAdd={this.props.onAdd} />;
        })}
      </div>
    )
  }
}

export default TrackList;
