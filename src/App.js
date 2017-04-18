import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem vindo ao React</h2>
        </div>
        <p className="App-intro">
          Para começar, edite <code>src/App.js</code> e salve o arquivo para recarregar.
           <RaisedButton label="MaterialUI Button" primary={true} style={style}/>
           <RaisedButton label="Button" secondary={true} style={style}/>
        </p>
      </div>
    );
  }
}

export default App;
