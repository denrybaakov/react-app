import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';



const PostList = ({ posts, onDelete }) => {

  const elements = posts.map((item) => {
    const { id, ...itemsProps } = item;
    // if (id === null || id === undefined || id === '') {
    // return null;
    // } else {
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          label={itemsProps.label}
          important={itemsProps.important}
          onDelete={() => onDelete(id)}
        />
      </li>
    )
    // }

  });
  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;