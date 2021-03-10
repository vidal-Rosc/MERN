import React, { useContext, useEffect } from 'react';
import Project from '../projects/Project';
import ProjectContext from '../../context/projects/ProjectContext';



const ProjectList = () => {

    const projectsContext = useContext(ProjectContext);

    //requerimos solo los proyectos, por ende solo extraemos los proyectos
    const { proyectos, getProjects } = projectsContext;

    //Para obtener los proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    },[]);
    
    //Revisamos si hay contenido en proyectos
    if(proyectos.length === 0) return null;


    return ( 
        <ul className="list-projects">
            {proyectos.map(project => (
                <Project
                    key={project.id}
                    project ={project}
                />
            ))}

        </ul>
    );
}
 
export default ProjectList;