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

  formatarUsuario(usuario) {
  	return usuario.nome + ' ' + 
    usuario.sobrenome;
  }
  
  render() {
    return(
      <div>
        <p>
        {() => this.formatarUsuario(this.props.usuario)}
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <JSXExample usuario={ nome: "Gabriel", sobrenome: "Tiburcio" }/>
  </div>, 
  mountNode);
`;

