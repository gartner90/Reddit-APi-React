import React, { Component } from 'react';

class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <article>
      	{post.title}
      </article>
    );
  }
}

export default Post;
