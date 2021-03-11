import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';


const Project = ({project}) => {
    //State para los proyectos
    const projectsContext = useContext(ProjectContext);
    const {actualProject } = projectsContext;


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => actualProject(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Project;