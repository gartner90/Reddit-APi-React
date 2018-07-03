import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import { timestampToDate } from '../Services';
import { Row, Col, Image } from 'react-bootstrap';

class Post extends Component {

  render() {
    const { post, setPost, position } = this.props;
    return (
      <div>
        <article onClick={(num) => setPost(position)}>
          <div>
            <span>{post.author} </span>
            <span>
               | <TimeAgo date={timestampToDate(post.created)}/>
            </span>
          </div>
          <Row>
            <Col sm={6}>
              <Image src={post.thumbnail} rounded/>
            </Col>
            <Col sm={6}>
              <div>{post.title}</div>
            </Col>
          </Row>
          <div>
            {post.num_comments} comments
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
