import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import {v4 as uuidv4} from 'uuid';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types';


//Definimos el state qe se va a tener y tambien van a estar
//las diferentes funciones con dispatch hacia los types.

//State inicial de la administracion del proyecto(crear, eliminar)

const ProjectState = props => {

    const proyectos = [
        { id:1, name: "Gem's store" },
        { id:2, name: 'clothes & shoes  website' },
        { id:3, name: 'intranet' },
        { id:4, name: 'Abogados & Asociados Web' }
    ]
    const initialState = {
        proyectos : [],
        form : false,
        errorForm: false,
        project: null
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

    //Agregar un nuevo proyecto
    const addProject = project => {
        project.id = uuidv4();

        //insertamos el proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Validando el formulario-- Mostrar errores
    const error = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    //Selecciona el proyecto en el sideBar
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }
    
    //Eliminar un projecto
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }


    return (
        <ProjectContext.Provider
            value={{
                proyectos: state.proyectos,
                form: state.form,
                errorForm: state.errorForm,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                error,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;