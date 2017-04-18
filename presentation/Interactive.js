import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
      {this.state.count < 5 ?
        <div>
          <Heading size={5} textColor="white">
            O botão foi clicado {this.state.count} vezes
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>Clique Aqui</button>
        </div> :
          <Heading size={5} fit caps textColor="white">Calma lá!</Heading>
        }
      </div>
    );
  }
}