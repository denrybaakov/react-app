import React from 'react';

const PostAddForm = ({ onAdd }) => {
  return (
    <div action="" className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hello')}>
        Добавить пост
      </button>
    </div>
  )
}

export default PostAddForm;