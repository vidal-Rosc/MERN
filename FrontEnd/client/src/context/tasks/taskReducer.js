import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, TASK_STATUS, ACTUAL_TASK } from '../../types';



export default(state, action) => {
    switch(action.type){
        case  TASKS_PROJECT:
            return {
                ...state,
                taskProjects: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks], //creamos un nuevo arreglo de tareas con las nuevas
                taskError: false
            }
         case  VALIDATE_TASK:
            return {
                ...state,
                taskError: true,
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case TASK_STATUS:
            return {
                ...state,
                tasks: state.taskProjects.map(task => task.id === action.payload.id ? action.payload :task)
            }
        case ACTUAL_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }

        default:
            return state;
    }
}