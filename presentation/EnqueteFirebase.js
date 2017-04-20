import React from 'react';

import {
  Heading,
  Layout,
  Fill,
} from "spectacle";

import * as firebase from 'firebase';

export default class EnqueteFirebase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sim: 0,
      nao: 0,
      jaRespondeu: localStorage.getItem('respondeu-enquete-' + this.props.identificador) || false
    };
  }

  cliqueSim() {
    if(!this.state.jaRespondeu) {
      localStorage.setItem('respondeu-enquete-' + this.props.identificador, true);
      this.setState({ jaRespondeu: true });
      const ref = firebase.database().ref('enquete-' + this.props.identificador);
      ref.transaction(resultado => {
        if(resultado === null) {
          return { sim: 1, nao: 0 };
        }
        else {
          return { sim: (resultado.sim + 1), nao: resultado.nao };
        }
      });
    }
  }

  cliqueNao() {
    if(!this.state.jaRespondeu) {
      localStorage.setItem('respondeu-enquete-' + this.props.identificador, true);
      this.setState({ jaRespondeu: true });
      const ref = firebase.database().ref('enquete-' + this.props.identificador);
      ref.transaction(resultado => {
        if(resultado === null) {
          return { sim: 0, nao: 1 };
        }
        else {
          return { sim: resultado.sim, nao: (resultado.nao + 1) };
        }
      });
    }
  }

  componentDidMount() {
    const ref = firebase.database().ref('enquete-' + this.props.identificador);
    ref.on('value', snapshot => {
      const respostas = snapshot.val();
      console.log('Chegando novas respostas.');
      if(respostas !== null) {
        this.setState({ sim: respostas.sim, nao: respostas.nao });
      }
    });
    console.log('Já respondeu: ' + this.state.jaRespondeu);
  }

  render() {
    return(
      <div>
        <Heading size={6} textColor="white">{this.props.pergunta}</Heading>
        <Layout>
          <Fill>
            {
              !this.state.jaRespondeu ? <button onClick={() => this.cliqueSim()}>Sim</button> :
              <button disabled>Sim</button>
            }
            <Heading size={3} textColor="white">{this.state.sim}</Heading>
          </Fill>
          <Fill>
            {
              !this.state.jaRespondeu ? <button onClick={() => this.cliqueNao()}>Não</button> :
              <button disabled>Não</button>
            }
            <Heading size={3} textColor="white">{this.state.nao}</Heading>
          </Fill>
        </Layout>
      </div>
    );
  }
}