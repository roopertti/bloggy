import React from 'react';

const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-3">Dislike everything!</h1>
        <p className="lead">New social network service! Like-button will remain disabled</p>
        <hr className="my-4" />
        <p>Log in with your Google+ account and start shitposting/disliking!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/auth/google" role="button">Log in with Google+ account!</a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
