import React, { Component } from 'react';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e) {
    e.preventDefault(); //---?????
    const term = e.target.value;
    this.setState({ term: term });
    this.props.onUpdateSearch(term); // не рекурсия а в виде проперти
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }
}

