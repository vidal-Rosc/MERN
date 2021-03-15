import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/taskContext';



const Task = ({task}) => {

    //Para obtener el proyecto actual
    const projectsContext = useContext(ProjectContext);
    const { project } = projectsContext;

    //Obtenemos la funcion para eliminar las tareas
    const tasksContext = useContext(TaskContext);
    const { deleteTask, getTasks, taskStatus } = tasksContext;

    const [actualProject] = project;

    //Al eliminar una tarea
    const delTask = id => {
        deleteTask(id);
        getTasks(actualProject.id);
    }

    //Para modificar el status de las tareas 
    const changeTaskStatus = task => {
    //if(task.status){
    //    task.status= false;
    //}else{
    //   task.status= true; 
    //}
    //taskStatus(task);
        task.status ? task.status= false : task.status = true;
        taskStatus(task)
    }

    

    return ( 
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="status">
                {task.status 
                ?(
                    <button
                        type="button"
                        className="completed"
                        onClick={() => changeTaskStatus(task)}
                    >Done!</button>
                )
                :(
                    <button
                        type="button"
                        className="incompleted"
                        onClick={() => changeTaskStatus(task)}
                    >Not Yet!</button>
                )
                }
            </div>

            <div className="actions">

                <button
                    type="button"
                    className="btn btn-primary"
                >Edit</button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => delTask(task.id)}
                >Delete</button>

            </div>

        </li>
    );
}
 
export default Task;