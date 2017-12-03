import React from 'react';

import Post from './Post';

const Feed = (props) => {

  let posts = [
    {
      key: "1",
      title: "Random post",
      text: "asklfblkbskljbaskljbgsadkljbgaskldjgbaskdjgbkasdjg",
      published: "19.04.1994",
      userImg: "https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg"
    },
    {
      key: "2",
      title: "Postaus",
      text: "Moi mitä kuuluu asdf",
      published: "20.12.2017",
      userImg: "https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg"
    },
    {
      key: "3",
      title: "Hehe xd",
      text: "hehehehehehehhohohohsdnflsdnflsadnflsdnflsadnflasdnfasldnflasdfnalsdfnlasdnfalsdjnfla",
      published: "06.12.2017",
      userImg: "https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg"
    }
  ];

  let postList = posts.map((post) => {
    return <Post
      key={post.key}
      title={post.title}
      text={post.text}
      published={post.published}
      userImg={post.userImg} />;
  });

  return (
    <div className="container">
      {postList}
    </div>
  );
}

export default Feed;
