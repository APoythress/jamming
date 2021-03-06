import React from 'react';

import './SearchBar.css';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.onSearch(this.state.term);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange}
               onKeyPress={this.handleKeyPress} />
        <a onClick={this.search} > SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
