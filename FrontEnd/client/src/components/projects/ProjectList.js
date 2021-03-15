import React, { useContext, useEffect } from 'react';
import Project from '../projects/Project';
import ProjectContext from '../../context/projects/ProjectContext';
import { CSSTransition, TransitionGroup } from  'react-transition-group';


const ProjectList = () => {

    const projectsContext = useContext(ProjectContext);

    //requerimos solo los proyectos, por ende solo extraemos los proyectos
    const { proyectos, getProjects } = projectsContext;

    //Para obtener los proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
        //eslint-disable-next-line
    },[]);
    
    //Revisamos si hay contenido en proyectos
    if(proyectos.length === 0) return <p>There's not Projects yet. Let's start one :)</p>;


    return ( 
        <ul className="list-projects">
          <TransitionGroup>
                {proyectos.map(project => (
                   <CSSTransition
                        key={project.id}
                        timeout={300}
                        classNames="project"
                   >
                        <Project
                            project ={project}
                        />
                   </CSSTransition>
                ))} 
          </TransitionGroup>

        </ul>
    );
}
 
export default ProjectList;