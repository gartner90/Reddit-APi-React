import React, { Component } from 'react';
import Post from '../components/Post';

class List extends Component {

  render() {
    const { posts } = this.props;

    const items = posts.map((item, i) => (
      <Post
        post={item.data}
        key={i}
      />
    ));
    return (
      <section>
        <h3>Top Reddit Posts</h3>
        {items}
      </section>
    );
  }
}

export default List;
