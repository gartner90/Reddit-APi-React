import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import List from './components/List';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    }

    this.getData();
  }

  getData() {
    axios.get('https://www.reddit.com/r/funny/top.json?limit=50')
      .then(response => {
        const data = response.data.data.children;
        this.setState({posts: data});
      })
  }

  componentDidMount() {
    this.getData();
  }

  setPost = (position) => {
    console.log('position', position);
    this.setState({
        selected: position,
    });
  }

  render() {
    const currentPost = this.state.posts[this.state.selected];
    const { posts, selected } = this.state;

    return (
      <div className="container-fluid">
        <Row>
            <Col sm={4} xs={12}>
              { this.state.posts.length > 0 ?
                <List 
                  posts={posts}
                  setPost={this.setPost} 
                  selected={selected}
                />
              : null }
            </Col>
            <Col sm={8} xs={12}>
              { currentPost ? <Detail post={currentPost.data}/> : null }
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
