import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import List from './components/List';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: null,
      posts: [],
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('rd-data')) {
      this.getData();
    } else {
      this.setState({posts: JSON.parse(localStorage.getItem('rd-data'))});
    }
  }

  getData() {
    axios.get('https://www.reddit.com/r/funny/top.json?limit=50')
      .then(response => {
        const data = response.data.data.children;
        this.setState({posts: data});
        localStorage.setItem('rd-data', JSON.stringify(data));
      })
  }

  hidePost = (position) => {
    let newArray = [...this.state.posts];
    newArray[position].data.hide = true;

    this.setState({
        selected: null,
        posts: newArray,
    });

    setTimeout(() => {
      newArray.splice(position, 1);
      this.setState({posts: newArray});
      localStorage.setItem('rd-data', JSON.stringify(newArray));
    }, 600);
  }

  hideAll = () => {
    let newArray = [...this.state.posts];
    newArray.forEach((post, index) => {
      newArray[index].data.hide = true;
    });
    this.setState({posts: newArray});

    setTimeout(() => {
      this.setState({posts: []});
      localStorage.setItem('rd-data', JSON.stringify([]));
    }, 600);
  }

  setPost = (position) => {
    let newArray = [...this.state.posts];
    newArray[position].data.readed = true;

    this.setState({
        selected: position,
        posts: newArray,
    });

    localStorage.setItem('rd-data', JSON.stringify(newArray));
  }
  
  render() {
    const currentPost = this.state.posts[this.state.selected];
    const { posts, selected } = this.state;

    return (
      <div className="container-fluid">
        <Row>
          <Col sm={4} className="rd-side-left">
            <a onClick={(e) => this.getData()} className="rd-btn-side rd-restore">
              Restore <Glyphicon glyph="repeat"/>
            </a>
            { this.state.posts.length > 0 ?
              <List 
                posts={posts} 
                setPost={this.setPost} 
                hidePost={this.hidePost} 
                hideAll={this.hideAll} 
                selected={selected}
              />
            : null }
          </Col>
          <Col sm={8}>
            { currentPost ? <Detail post={currentPost.data}  className="rd-post-content"/> : null }
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
