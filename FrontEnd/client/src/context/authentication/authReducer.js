import {SUCCESFUL_REGISTRATION, 
        UNSUCCESFUL_REGISTRATION, 
        GET_USER,
        SUCCESFUL_LOGIN,
        UNSUCCESFUL_LOGIN,
        LOG_OUT} from '../../types/';



export default (state, action) => {
    switch(action.type){
        case SUCCESFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case UNSUCCESFUL_REGISTRATION:
            return {
                ...state,
                authenticated: false,
                message: action.payload
            }

        default:
            return state;
    }
}