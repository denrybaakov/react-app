import React, { Component } from 'react';
// import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' }
    ];
  }

  render() {

    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const classNameFilter = active ? 'btn-info' : 'btn-outline-secondary'

      return (
        <button
          key={name}
          type="button"
          className={`btn ${classNameFilter}`}
          onClick={() => this.props.onFilterSelect(name)}>
          {label}
        </button>
      )
    });

    return (
      <div className="btn-group" >
        {/* <button type="button" className="btn btn-info">Все</button>
        <button type="button" className="btn btn-outline-secondary">Понравилось</button> */}
        {buttons}
      </div>
    )
  }
}

