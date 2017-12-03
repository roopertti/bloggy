import React from 'react';

const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post-section-small">
        <div className="post-profile-picture-container">
          <img
            src={props.userImg}
            className="post-profile-picture" />
        </div>
      </div>
      <div className="post-section-big">
        <div className="post-header">
          <p className="post-title">{props.title}</p>
        </div>
        <div className="post-body">
          <p className="post-content">
            {props.text}
          </p>
          <p className="post-date">{props.published}</p>
        </div>
        <div className="post-footer">
          <button className="btn btn-primary">
            Dislike <i
              className="fa fa-thumbs-o-down"
              aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
