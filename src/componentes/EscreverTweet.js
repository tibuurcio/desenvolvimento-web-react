import React from 'react';
import './EscreverTweet.css';
import axios from 'axios';

class EscreverTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      texto: ''
    };
  }

  // Modo genérico de lidar com os 3 inputs ao mesmo tempo
  // utilizando acesso a propriedades dinamicamente
  // Exemplo: this.handleChange(e.target.value, 'nome');
  // handleChange(valor, item) {
  //   this.setState((prev) => {
  //     let novo = prev;
  //     novo[item] = valor;
  //     return novo;
  //   });
  // }

  mudarNome(novoValor) {
    this.setState({
      nome: novoValor
    });
  }

  mudarSobrenome(novoValor) {
    this.setState({
      sobrenome: novoValor
    });
  }

  mudarTexto(novoValor) {
    this.setState({
      texto: novoValor
    });
  }

  enviarTweet() {
    const configs = {
      headers: {'Content-Type': 'application/json'}
    };

    axios.post('http://10.6.8.193/tweets', {
      usuario: {
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        foto: 'http://placehold.it/100x100'
      },
      texto: this.state.texto,
      likes: 0,
      data_publicacao: new Date().toISOString()
    }, configs).then(function() {
      console.log('Sucesso');
    }).catch(function(erro) {
      console.log(erro);
    });
  }

  render() {
    return (
        <div className='escrever-tweet-container'>
          <h4 className='escrever-tweet-titulo'>Digite seu tweet</h4>
            <div className='tweet-input-container'>

              <input className="tweet-input" 
                type='text' 
                placeholder='Digite seu nome' 
                value={this.state.nome} 
                onChange={(e) => this.mudarNome(e.target.value)}/>

            </div>
            <div className='tweet-input-container'>

              <input className="tweet-input" 
                type='text' 
                placeholder='Digite seu sobrenome' 
                value={this.state.sobrenome} 
                onChange={(e) => this.mudarSobrenome(e.target.value)}/>

            </div>
            <div className='tweet-input-container'>

              <textarea className="tweet-input tweet-textarea" 
                type='text' 
                placeholder='Digite seu tweet' 
                value={this.state.texto} 
                onChange={(e) => this.mudarTexto(e.target.value)}/>

            </div>
            <button onClick={() => this.enviarTweet()} className='enviar-tweet-btn'>Enviar</button>
        </div>
    );
  }
}

export default EscreverTweet;