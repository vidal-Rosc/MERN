import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';

const FormTask = () => {
     //State para los proyectos activos
     const projectsContext = useContext(ProjectContext);
     const { project } = projectsContext;

     //Si no hay proyecto seleccionado
     if(!project) return null;

     //Array destructuring para obtener la posicion [0] del proyecto
     const [actualProject] = project;

    return ( 
        <div className="form">
            <form>
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Enter new task..."
                        name="name"
                    />
                </div>

                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block-small"
                        value="Add Task"
                    />
                </div>
            </form>
        </div> 
      
    );
}
 
export default FormTask;