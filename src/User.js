import React, { Component } from 'react';

class User extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name:"Nome"
        }
        this.alteraNome = this.alteraNome.bind(this);
        this.resetaNome = this.resetaNome.bind(this);
    }
    
    alteraNome(){
        this.setState({
            name:"Nome Alterado"
        })
    }

    resetaNome(){
        this.setState({
            name:"Nome"
        })
    }

    render() {
        return(
            <div>
                Nome enviado por parâmetro:{this.props.name}
                <p></p>
                Nome: {this.state.name}
                <p></p>
                <button onClick={this.alteraNome}>Altera Nome</button>
                <button onClick={this.resetaNome}>Reseta Nome</button>
                <p></p>
                <img src = {this.props.photo} alt={this.props.name}></img>
                
            </div>
        );
    }
}
export default User;