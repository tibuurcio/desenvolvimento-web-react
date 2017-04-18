export const buttonCode = `
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicadas: 0 };
  } 

  clicou() {
    let clicadas = this.state.clicadas;
    clicadas++;
    this.setState({clicadas: clicadas});
  }

  render() {
    return(
      <div>
        <button
        onClick={() => this.clicou()}>
        { this.props.texto }
        </button>
        <p>Clicadas: {this.state.clicadas}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Button texto="Clique-me"/>, 
mountNode);
`;
