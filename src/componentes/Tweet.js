import React from 'react';
import './Tweet.css';

import Avatar from './Avatar';

class Tweet extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          likes: this.props.tweet.likes,
          jaDeuLike: false,
      };
  }

  like() {
      if(!this.state.jaDeuLike) {
        var likesAtuais = this.state.likes;
        this.setState({ likes: likesAtuais + 1, jaDeuLike: true });
      }
  }

  render() {
    var tweet = this.props.tweet;

    return (
        <div className="tweet-div">
            <Avatar usuario={tweet.usuario}/>

            <p>{tweet.texto}</p>

            { 
                this.state.jaDeuLike ? 
                <button onClick={() => this.like()} disabled>Like</button> :
                <button onClick={() => this.like()}>Like</button>
            }

            <p className="tweet-likes">Likes: {this.state.likes}</p>
        </div>
    );
  }
}

export default Tweet;