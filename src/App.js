import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tweet from './componentes/Tweet';

const style = {
  margin: 12,
};

var tweets = [{
  usuario: {
		nome: "Gabriel",
		sobrenome: "Tiburcio",
		username: "tibuurcio",
    foto: "https://avatars3.githubusercontent.com/u/5959178?v=3&s=460"
	},
	data_publicacao: "20/04/2017",
	texto: "Javascript parece daora, acho que todos deveriam aprender.",
	likes: {
		total: 3,
		usuarios: ["Judson", "Daniel", "Diego"]
	}
}, 
{
  usuario: {
		nome: "Diego",
		sobrenome: "Cabral",
		username: "diegoect",
    foto: "http://placehold.it/100x100"
	},
	data_publicacao: "20/04/2017",
	texto: "Realmente, Javascript tem cara de futuro.",
	likes: {
		total: 3,
		usuarios: ["Judson", "Daniel", "Gabriel"]
	}
}, 
{
  usuario: {
		nome: "Orivaldo",
		sobrenome: "Santana",
		username: "orivaldo",
    foto: "http://placehold.it/100x100"
	},
	data_publicacao: "20/04/2017",
	texto: "Prefiro C++",
	likes: {
		total: 0,
		usuarios: []
	}
}];

class App extends React.Component {
  render() {

    var listaTweets = tweets.map(function(tweet) {
      return <Tweet tweet={tweet} tamanhoAvatar={60}/>
    });

    return (
      <div className="App">
        <div className="App-header" style={{textAlign: 'center'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem vindo ao React</h2>
        </div>

        { listaTweets }
      </div>
    );
  }
}

export default App;
