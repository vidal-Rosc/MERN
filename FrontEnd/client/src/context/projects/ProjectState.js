import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { FORM_PROJECT, GET_PROJECTS } from '../../types';


//Definimos el state qe se va a tener y tambien van a estar
//las diferentes funciones con dispatch hacia los types.
//State inicial de la administracion del proyecto(crear, eliminar)


const ProjectState = props => {

    const proyectos = [
        { id:1, name: 'gems store' },
        { id:2, name: 'clothes & shoes  website' },
        { id:3, name: 'intranet' },
        { id:4, name: 'Abogados & Asociados Web' }
    ]
    const initialState = {
        proyectos : [],
        form : false,
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProjectReducer, initialState)

   
    //Funciones para el CRUD

    //Funcion para mostrar el formulario
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

     //Obtener los proyectos
     const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: proyectos
        })
     }

    return (
        <ProjectContext.Provider
            value={{
                proyectos: state.proyectos,
                form: state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;