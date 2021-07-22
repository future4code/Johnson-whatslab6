import React from 'react';


export default class ListaMensagens extends React.Component {

    render(){
        return(
            <div>
                <p><strong>{this.props.usuario}</strong>: {this.props.mensagem}</p>
            </div>
            
        )
    }
}
