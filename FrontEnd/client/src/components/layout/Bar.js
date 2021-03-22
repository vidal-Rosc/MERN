import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Bar = () => {

     //Extramos los datos del usuario autenticado
     const authContext = useContext(AuthContext);
     const { userAuthenticated, user, userLogout } = authContext;
 
     useEffect(() => {
         userAuthenticated()
     }, []);

    return (  
        <header className="app-header">
            { user ? <p className="user-name"> welcome, <span> {user.name} </span></p> : null }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank"
                    onClick={ () => userLogout() }
                >Sign Out</button>
            </nav>

        </header>
    );
}
 
export default Bar;