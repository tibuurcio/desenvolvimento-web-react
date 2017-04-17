import React from 'react';
import {
  Heading, Layout, Fill, CodePane
} from 'spectacle';

export default class CodeComparation extends React.Component {
  render() {
    return (
      <div>
        <Heading size={4} textColor="white">
          {this.props.title}
        </Heading>
        <Layout>
          <Fill style={{marginRight: '10px'}}>
            <Heading size={6} textColor="secondary">{this.props.languages[0].name}</Heading>
            <CodePane 
              lang={this.props.languages[0].prismcode}
              source={require("raw-loader!../assets/code/" + this.props.languages[0].filename)}/>
          </Fill>
          <Fill>
            <Heading size={6} textColor="secondary">{this.props.languages[1].name}</Heading>
            <CodePane 
              lang={this.props.languages[1].prismcode}
              source={require("raw-loader!../assets/code/" + this.props.languages[1].filename)}/>
          </Fill>
        </Layout>
      </div>
    );
  }
}