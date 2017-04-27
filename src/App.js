import React from 'react';
import axios from 'axios';
import './App.css';
import Tweet from './componentes/Tweet';
import EscreverTweet from './componentes/EscreverTweet';
// import FiltrarTweets from './componentes/FiltrarTweets';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listaTweets: null
		};
	}

	componentDidMount() {
		axios.get('http://10.6.8.193/tweets')
			.then((resposta) => this.carregarTweets(resposta));
	}

	carregarTweets(resposta) {
		const listaTweets = resposta.data.map(function(cadaTweet) {
			return <Tweet tweet={cadaTweet}/>
		});
		this.setState({ listaTweets: listaTweets });
	}

  render() {
		const tweets = this.state.listaTweets;
    return (
      <div className="App">
				<EscreverTweet />
				{/*<FiltrarTweets />*/}
				<br/>
        { !tweets ? 'Nenhum tweet registrado' : tweets }
      </div>
    );
  }
}

export default App;
