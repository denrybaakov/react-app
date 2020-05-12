import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';



const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {

  const elements = posts.map((item) => {
    const { id, ...itemsProps } = item;
    if (id === null || id === undefined || id === '' || itemsProps.label === '') {
      return null;
    } else {
      return (
        <li key={id} className="list-group-item">
          <PostListItem
            label={itemsProps.label}
            important={itemsProps.important}
            like={itemsProps.like}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLike={() => onToggleLike(id)}
          />
        </li>
      )
    }

  });
  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;