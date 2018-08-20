import React, { Component } from 'react';

import './users'
import './login.css'; 

class Login extends Component {
    
    
    login = ()=>{
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let Object = localStorage.getItem('user');
        let s = JSON.parse(Object)
        let user = s.username
        let pas = s.password
        username == user && password == pas ? window.open("https://www.ynet.co.il/home/0,7340,L-8,00.html") : alert('One of the data is incorrect')
    }
    render() { 
        return ( 
            <div className='container'>
                <div class="login ">
                    <h1>Login</h1>
                    <input type="text" name="u" placeholder="Username" id="username" required/>
                    <input type="password" name="p" placeholder="Password" id="password" required/>
                        <button onClick={this.login}  type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                </div>
               
            </div>
         );
    }
}
 
export default Login;