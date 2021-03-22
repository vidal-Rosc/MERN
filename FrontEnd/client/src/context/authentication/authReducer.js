import {SUCCESFUL_REGISTRATION, 
        UNSUCCESFUL_REGISTRATION, 
        GET_USER,
        SUCCESFUL_LOGIN,
        UNSUCCESFUL_LOGIN,
        LOG_OUT} from '../../types/';



export default (state, action) => {
    switch(action.type){
        case SUCCESFUL_REGISTRATION:
        case SUCCESFUL_LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case UNSUCCESFUL_LOGIN:
        case UNSUCCESFUL_REGISTRATION:
            localStorage.removeItem('token');
            return {
                ...state,
                authenticated: false,
                message: action.payload
            }

        default:
            return state;
    }
}