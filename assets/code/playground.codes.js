export const buttonCode = `
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  } 

  clicou() {
    let clicadas = this.state.contador + 1;
    this.setState({ contador: clicadas });
  }

  render() {
    return(
      <div>
        <button onClick={() => this.clicou()}>
        { this.props.texto + ' ' + 
          this.state.contador + ' vezes' }
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Button texto="Clicou"/>, 
mountNode);
`;

export const jsxExample = `
class JSXExample extends React.Component {
  render() {

    var usuario = {
      nome: "Gabriel",
      sobrenome: "Tiburcio"
    };

    return(
      <div>
        <p>{formatarUsuario(usuario)}</p>
      </div>
    );
  }
}

formatarUsuario(usuario) {
  return usuario.nome + ' ' + 
  usuario.sobrenome;
}

ReactDOM.render(
  <div>
    <JSXExample />
  </div>, 
  mountNode);
`;

export const clockExample = `
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Olá Mundo!</h1>
        <h2>São {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Clock />
  </div>, 
  mountNode);
`;


