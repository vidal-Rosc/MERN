import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axiosClient from '../../config/axios';
import {SUCCESFUL_REGISTRATION, 
    UNSUCCESFUL_REGISTRATION, 
    GET_USER,
    SUCCESFUL_LOGIN,
    UNSUCCESFUL_LOGIN,
    LOG_OUT} from '../../types/';


const AuthState = props => {

    const initialState = {
        //Iniciamos el state con un token y lo almacenamos en localstorage
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer( AuthReducer, initialState );

    const userRegistration = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            console.log(response.data);
            dispatch({
                type : SUCCESFUL_REGISTRATION,
                payload : response.data        
            })
        } catch (error) {
            //console.log(error.response.data.msg);
            const alert = {
                msg : error.response.data.msg,
                category : 'alert-error'
            }
            dispatch({
                type : UNSUCCESFUL_REGISTRATION,
                payload : alert
            })
        }

    }





    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                userRegistration,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;