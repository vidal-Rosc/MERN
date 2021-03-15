import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {
    //State para los proyectos activos
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    //Obtenemos la funcion para agregar tareas nuevas
    const tasksContext = useContext(TaskContext);
    const { addTask, validateTask, taskError, getTasks } = tasksContext;

    //State del formulario
    const [task, handleTask] = useState({
         name: ''
    });

    //destructuring para obtener el nombre de la tarea
    const { name } = task;

    //Si no hay proyecto seleccionado
    if(!project) return null;

    //Array destructuring para obtener la posicion [0] del proyecto
    const [actualProject] = project;

    //Leemos los datos del input
    const handleOnChange = e => {
        handleTask({
            ...task,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(name.trim() === ''){
            validateTask();
            return;
        }

        //Agregamos la nueva tarea al state principal de tareas
         task.projectId = actualProject.id;
         task.status = false;
         addTask(task);
        
        //Obtenemos las tareas del proyecto actual
        getTasks(actualProject.id);

        //limpiamos el formulario
        handleTask({
             name: ''
         })
    }

    return ( 
        <div className="form">
            <form
                onSubmit={onSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Enter new task..."
                        name="name"
                        value={name}
                        onChange={handleOnChange}

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
            { taskError ?  <p className="message error">Task name is required</p>: null}
        </div> 
      
    );
}
 
export default FormTask;