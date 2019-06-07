import React, { Component } from 'react';

class User extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name:"Nome",
            email:"email@email.com"
        }
        this.alteraNome = this.alteraNome.bind(this);
        this.resetaNome = this.resetaNome.bind(this);
        this.changeInput = this.changeInput.bind(this);
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

    changeInput(event){
        let target = event.target;
        let index = target.name;
        this.setState({
            [index]:target.value
        })
    }

    render() {
        return(
            <div>
                Nome enviado por parâmetro:{this.props.name}
                <p></p>
                <form>
                    <label>Nome
                        <input onChange={this.changeInput} tyep="text" name="name" value={this.state.name} ></input>
                    </label>
                    <label>Email
                        <input onChange={this.changeInput} tyep="email" name="email" value={this.state.email} ></input>
                    </label>
                </form>
                <p></p>
                Nome: {this.state.name} - Email: {this.state.email}
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