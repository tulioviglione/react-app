import React, { Component } from 'react';

class User extends Component {
    
    render() {
        let list = [
            {
                name:"Usuario3",
                email:"usuario3@email.com"
            },
            {
                name:"Usuario4",
                email:"usuario4@email.com"
            }
        ]
        
        return(
            <div>
                <table>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                    </tr>
                    {list.map((item) => {
                        return (
                            <tr>
                                <td>
                                    {item.name}
                                </td>   
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
export default User;