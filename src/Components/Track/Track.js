import React from 'react';
import './Track.css';

import SearchResults from '../SearchResults/SearchResults';
import TrackList from '../TrackList/TrackList';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAction() {
    if (Track.isRemoval === true) {
      return <a className="Track-action">'-'</a>
    } else {
      return <a className="Track-action">'+'</a>
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <a className="Track-action">{/* <!-- + or - will go here --> */}</a>
      </div>
    )
  }
}

export default Track;
