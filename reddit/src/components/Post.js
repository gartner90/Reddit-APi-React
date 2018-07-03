import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import { timestampToDate } from '../Services';
import { Row, Col, Image, Glyphicon } from 'react-bootstrap';

class Post extends Component {

  render() {
    const { post, setPost, hidePost, selected, position } = this.props;

    return (
      <div className={`rd-card-content ${post.hide ? 'rd-card-hide' : ''}`}>
        <Glyphicon glyph="trash" className="rd-delete" onClick={(num) => hidePost(position)}/>
        <article className={`rd-card ${selected === position ? 'active' : ''}`} onClick={(num) => setPost(position)}>
          {!post.readed ? <img className="rd-img-new" src="https://cdn.pixabay.com/photo/2016/07/05/01/07/new-icon-1497910_960_720.png" alt="new"/> : null}
          <div className="rd-card-author">
            <span className="rd-card-title-text">{post.author} </span>
            <span className="rd-card-title-date">
               | <TimeAgo date={timestampToDate(post.created)}/>
            </span>
          </div>
          <Row className="rd-card-thumb">
            <Col sm={6}>
              <Image src={post.thumbnail} rounded/>
            </Col>
            <Col sm={6}>
              <div className="rd-card-title">{post.title}</div>
            </Col>
          </Row>
          <div className="rd-card-comments">
            {post.num_comments} comments
          </div>
        </article>
      </div>
    );
  }
}

export default Post;
