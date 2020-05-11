import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatus from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';

import nextId from 'react-id-generator';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: nextId(), label: 'Хочу выучить английский язык', important: false },
        { id: nextId(), label: 'Изучить javascript & React + Redux', important: true },
        { id: nextId(), label: 'Изучить Canvas ', important: false }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];

      // console.log(newData);
      return {
        data: newData
      };
    });
  }

  addItem(text) {
    const newItem = {
      id: nextId(),
      label: text,
      important: false
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      // console.log(newArr);
      return {
        data: newArr
      }

    });
  }

  render() {
    return (
      <div className="app">
        <div className="fixed-menu">
          <AppHeader />
          <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatus />
          </div>
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

