import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatus from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';





export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, label: 'Хочу выучить английский язык', important: false },
        { id: 2, label: 'Изучить javascript & React + Redux', important: true },
        { id: 3, label: 'Изучить Canvas ', important: false }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newData
      };
    });
  }

  addItem(text) {
    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatus />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

