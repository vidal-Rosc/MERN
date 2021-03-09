import React from 'react';
import Project from '../projects/Project';



const ProjectList = () => {

    const proyectos = [
        {name: 'gems store'},
        {name: 'clothes & shoes  website'},
        {name: 'intranet'},
        {name: 'Abogados & Asociados Web'}
    ]
    return ( 
        <ul className="list-projects">
            {proyectos.map(project => (
                <Project
                    project ={project}
                />
            ))}

        </ul>
    );
}
 
export default ProjectList;