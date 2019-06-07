import React, { Component } from 'react';

class List extends Component {
    
    
    render() {
        let list = [
            {
                name:"Usuario1",
                email:"usuario1@email.com"
            },
            {
                name:"Usuario2",
                email:"usuario2@email.com"
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
export default List;