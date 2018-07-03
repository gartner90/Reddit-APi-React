import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import { Image } from 'react-bootstrap';
import { Player } from 'video-react';
import { timestampToDate } from '../Services';
import Iframe from 'react-iframe'

class Detail extends Component {
  render() {
    const post = this.props.post;
    
    return (
      <article>
        <h2>{post.title}</h2>

        {!post.is_video && !post.secure_media_embed.media_domain_url ? <Image src={post.url} rounded className="rd-detail-image"/> : null}
        {post.is_video ? <Player src={post.media.reddit_video.fallback_url}/> : null}
        {post.secure_media_embed.media_domain_url ? <Iframe url={post.secure_media_embed.media_domain_url} className="rd-detail-iframe"/> : null}

        <div>{timestampToDate(post.created)}</div>
        <div className="rd-card-author">
          <span className="rd-card-title-text">{post.author} </span>
          <span className="rd-card-title-date">
             | <TimeAgo date={timestampToDate(post.created)}/>
          </span>
        </div>
      </article>
    );
  }
}

export default Detail;
