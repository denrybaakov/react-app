import React from 'react';
// import { Button } from 'reactstrap';

const PostStatus = () => {
  return (
    <div className="btn-group">
      {/* <Button outline color="dark">Wse</Button> */}
      <button type="button" className="btn btn-info">Все</button>
      <button type="button" className="btn btn-outline-secondary">Понравилось</button>
    </div>
  )
}

export default PostStatus;