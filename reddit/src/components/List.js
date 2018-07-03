import React, { Component } from 'react';
import Post from '../components/Post';
import { Glyphicon } from 'react-bootstrap';

class List extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
  }

  setPage(id) {
    this.setState({
      currentPage: id + 1
    });
  }

  render() {
    const { posts, setPost, hidePost, selected, hideAll } = this.props;
    const { currentPage } = this.state;
    const postsPerPage = 10;
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const finalPosts = currentPosts.map((item, i) => (
      <Post
        post={item.data}
        setPost={setPost}
        hidePost={hidePost}
        selected={selected}
        index={i}
        position={(currentPage - 1) * postsPerPage + i}
        key={i}
      />
    ));

    const renderPageNumbers = pageNumbers.map((number, index) => {
      return (
        <li
          key={number}
          onClick={(num) => this.setPage(index)}
          className={`${currentPage === index + 1 ? 'active' : ''}`}
        >
          {number}
        </li>
      );
    });

    return (
      <section className="sidebar-container">
        <h3>Top Reddit Posts</h3>
        <div className="rd-posts-content">
          {finalPosts}
        </div>
        <ul id="page-numbers">
          {posts.length > 0 ? renderPageNumbers : null}
        </ul>
        <a onClick={(num) => hideAll()} className="rd-btn-side rd-delete-all">
          All 
          <Glyphicon glyph="trash"/>
        </a>
      </section>
    );
  }
}

export default List;
