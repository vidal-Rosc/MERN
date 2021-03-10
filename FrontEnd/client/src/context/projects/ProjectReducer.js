import { FORM_PROJECT, GET_PROJECTS } from '../../types';

//Contiene las funciones que van a interactuar con el state
//La nueva API de context con REDUCER, es un remplazo de redux sin necesidad de instalar nada.
//ya viene agregado en REACT

export default (state, action) => {
    switch(action.type){
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                proyectos: action.payload
            }
        default:
            return state;
    }
}