import React from 'react';
import './App.css';

import Tweet from './componentes/Tweet';

var tweets = [{
  usuario: {
		nome: "Gabriel",
		sobrenome: "Tiburcio",
    foto: "https://avatars3.githubusercontent.com/u/5959178?v=3&s=460"
	},
	data_publicacao: "20/04/2017",
	texto: "Javascript parece daora, acho que todos deveriam aprender.",
	likes: 3
}, 
{
  usuario: {
		nome: "Diego",
		sobrenome: "Cabral",
    foto: "http://placehold.it/100x100"
	},
	data_publicacao: "20/04/2017",
	texto: "Realmente, Javascript tem cara de futuro.",
	likes: 3
}, 
{
  usuario: {
		nome: "Orivaldo",
		sobrenome: "Santana",
    foto: "http://placehold.it/100x100"
	},
	data_publicacao: "20/04/2017",
	texto: "Prefiro C++",
	likes: 0
}];

class App extends React.Component {
  render() {
    var listaTweets = tweets.map(function(tweet) {
      return <Tweet tweet={tweet}/>
    });

    return (
      <div className="App">
        { listaTweets }
      </div>
    );
  }
}

export default App;
