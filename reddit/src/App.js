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

  render() {
    const { posts } = this.state;

    return (
      <div className="container-fluid">
        <Row>
            <Col sm={4} xs={12}>
              { this.state.posts.length > 0 ?
                <List 
                  posts={posts} 
                />
              : null }
            </Col>
            <Col sm={8} xs={12}>
              <Detail/>
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
