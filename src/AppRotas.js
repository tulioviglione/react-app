import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';

class AppRotas extends Component {
  
  render(){
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">Usuario</Link>        
        </div>  
        
        {routesConfig.map((value, key) =>{
          return <Route 
            key={key}
            path={value.path}
            Component={value.component}
            exact={value.exact} ></Route>
        })}        
      </div>
    );
  }
}

export default AppRotas;
