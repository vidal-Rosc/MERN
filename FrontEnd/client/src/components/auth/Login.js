import React, { useState } from 'react';
import {Link } from 'react-router-dom';



const Login = () => {

    //Definimos el state
    const [user, handleUser] = useState({
        email: '',
        password: ''
    });

    //Extraemos el email y password del user
    const {email, password } = user;

    const onChange = e => {
        handleUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Al iniciar session
    const onSubmit = e => {
        e.preventDefault();

        //Validar formulario


        //Enviarlo al action

    }


    return ( 
        <div className="user-form">
            <div className="container-form dark-shadow">
                <h1>*** Login ***</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="email"> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email..."
                            onChange={onChange}
                        />
                    </div>

                    <div className="field-form">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="field-form">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Login"
                        />
                    </div>
                </form>
                <Link to={'/new-account'} className="link-account">
                        Not Register?
                </Link>
            </div>
        </div>
     );
}
 
export default Login;