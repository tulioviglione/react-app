import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {
  render() {
    let list = [
        {
            name:"Usuario3",
            email:"usuario3.paiva@gmail.com"
        },
        {
            name:"Usuario4",
            email:"usuario4@gmail.com"
        }
    ]

    return (
        <div>
            <UserForm></UserForm>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {list.map((item) => {
                    return <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                    </tr>
                })}
            </table>
        </div>
    );
  }
}

export default User;
