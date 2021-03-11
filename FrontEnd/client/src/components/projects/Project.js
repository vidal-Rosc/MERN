import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';


const Project = ({project}) => {
    //State para los proyectos
    const projectsContext = useContext(ProjectContext);
    const {actualProject } = projectsContext;

    //Obtenemos la funcion del context de tareas
    const tasksContext = useContext(TaskContext);
    const { getTasks } = tasksContext;

    //Funcion para agregar el proyecto actual y sus tareas
    const projectSelected = projectId => {
        actualProject(projectId); //Selecciona el proyecto actual
        getTasks(projectId); // Filtra las tareas 
    }


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => projectSelected(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Project;