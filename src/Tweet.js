import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import './Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <Card className="tweet-container">
        <CardHeader title={this.props.autor} subtitle={this.props.data}
          avatar="https://avatars3.githubusercontent.com/u/5959178?v=3&s=460"/>

        <CardTitle title={this.props.titulo} />
        <CardText>
          {this.props.texto}
        </CardText>
        <CardActions>
          <FlatButton
            label="Favoritar"
            secondary={true}
            icon={<FontIcon className="fa fa-star" />}
          />
          <FlatButton
            label="Retweetar"
            primary={true}
            icon={<FontIcon className="fa fa-retweet" />}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Tweet;