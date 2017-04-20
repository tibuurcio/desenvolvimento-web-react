import React from 'react';

class Avatar extends React.Component {
  render() {

    var usuario = this.props.usuario;
    return (
        <div>
            <img className="img-circle" src={usuario.foto} width={this.props.tamanhoImagem}/>
            <div>{usuario.nome + ' ' + usuario.sobrenome} <b>@{usuario.username}</b></div>
        </div>
    );
  }
}

export default Avatar;