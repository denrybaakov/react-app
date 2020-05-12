import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';

import nextId from 'react-id-generator';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: nextId(), label: 'Добавьте новый пост', important: false, like: false }
        // { id: nextId(), label: 'Изучить javascript & React + Redux', important: true, like: false },
        // { id: nextId(), label: 'Изучить Canvas ', important: false, like: false }
      ],
      term: '',
      filter: 'all'
    };


    this.deleteItem = this.deleteItem.bind(this); // - привязка жестко к контексту
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  onToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.indexOf(term) > -1; //--- не понятно
    });
  }

  onUpdateSearch(term) { // -- принимает строку поиска
    this.setState({ term })
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <div className="fixed-menu">
          <AppHeader
            liked={liked}
            allPosts={allPosts}
          />
          <div className="search-panel d-flex">
            <SearchPanel
              onUpdateSearch={this.onUpdateSearch}
            />
            <PostStatusFilter
              filter={filter}
              onFilterSelect={this.onFilterSelect}
            />
          </div>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant} // --- обработчики событии
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

