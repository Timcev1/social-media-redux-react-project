import React from 'react';

class PostApplication extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Piotr Jaworski</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PostTable />
          </div>
        </div>
      </div>
    )
  }
};

export default PostApplication;
