import React, { Component } from 'react';
import Post from '../components/Post';

class List extends Component {

  render() {
    
    return (
      <section>
        <h3>Top Reddit Posts</h3>
        <Post/>
      </section>
    );
  }
}

export default List;
