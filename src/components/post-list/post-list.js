import React from 'react';
import PostListItem from '../post-list-item';


const PostList = ({ posts }) => {

  const elements = posts.map((item) => {
    const { id, ...itemsProps } = item;
    if (id === null || id === undefined || id === '') {
      return null;
    } else {
      return (
        <li key={id} className="list-group-item">
          <PostListItem
            label={itemsProps.label}
            important={itemsProps.important}
          />
        </li>
      )
    }

  });
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;