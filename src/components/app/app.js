import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatus from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form/';





const App = () => {

  const data = [
    { id: 'asxd', label: 'Хочу выучить английский язык', important: false },
    { id: 'sdcdc', label: 'Изучить javascript & React + Redux', important: true },
    { id: 'weew', label: 'Изучить Canvas ', important: false },
  ];



  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatus />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}

export default App;