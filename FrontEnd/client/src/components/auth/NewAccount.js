import React, { useState } from 'react';
import {Link } from 'react-router-dom';



const NewAccount = () => {

    //Definimos el state
    const [user, handleUser] = useState({
        name: '',
        email: '',
        password: '',
        repeatedpassword: ''
    });

    //Extraemos el email y password del user
    const {name, email, password, repeatedpassword } = user;

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

        //Validar que el password sea minimo de 5 caracteres


        //Validar que el password y el repeatedpassword sean lo mismo


        //Enviarlo al action

    }


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>*** New Member ***</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name..."
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
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

                    <div className="campo-form">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="repeatedpassword">Confirm Password</label>
                        <input
                            type="password"
                            id="repeatedpassword"
                            name="repeatedpassword"
                            value={repeatedpassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                        Return to Login
                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount;