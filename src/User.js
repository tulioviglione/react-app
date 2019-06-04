import React, { Component } from 'react';

class User extends Component {
    render() {
        return(
            <div>
                Nome: {this.props.name}
                <p></p>
                <img src = {this.props.photo} alt={this.props.name}></img>
            </div>
        );
    }
}
export default User;