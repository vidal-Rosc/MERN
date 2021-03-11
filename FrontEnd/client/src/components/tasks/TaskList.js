import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/ProjectContext';

const TaskList = () => {
    //State para los proyectos
    const projectsContext = useContext(ProjectContext);
    const { project, deleteProject } = projectsContext;

    //Si no hay proyecto seleccionado
    if(!project) return <h2>*** Select a Project ***</h2>;

    //Array destructuring para obtener la posicion [0] del proyecto
    const [actualProject] = project;

    const tasks = []

    //Elimina el projecto
    const deleteProjectxId = () => {
        deleteProject(actualProject.id);
    }

    return ( 
        <Fragment>
            <h2>Project: {actualProject.name}</h2>

            <ul className="tasks-list">
                {tasks.length === 0
                ? (<li className="task"><p>There's not Tasks</p></li>)
                : tasks.map(task => (
                    <Task
                        task={task}
                    />
                ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-delete"
                onClick={deleteProjectxId}
            >Delete Project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;