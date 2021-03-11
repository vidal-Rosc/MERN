import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';


const TaskState = props => {
    const initialState = {
        tasks: [
            {id:1, name: "select a platform", status: true, projectId: 1},
            {id:2, name: "Improve css", status: false, projectId: 1},
            {id:3, name: "Add new Form", status: true, projectId: 1},
            {id:4, name: "Find the proper colors for the header", status: false, projectId: 1},
            {id:5, name: "select a platform", status: true, projectId: 2},
            {id:6, name: "Improve the Visibility", status: false, projectId: 2},
            {id:7, name: "Add new Form", status: true, projectId: 2},
            {id:8, name: "Add new class for buttons", status: false, projectId: 2},
            {id:9, name: "Check the DB", status: true, projectId: 3},
            {id:10, name: "Change the detele button", status: false, projectId: 3},
            {id:11, name: "Change the Form", status: true, projectId: 3},
            {id:12, name: "select a platform", status: true, projectId: 4},
            {id:13, name: "Improve css", status: false, projectId: 4},
            {id:14, name: "Add new Form", status: true, projectId: 4},
            {id:15, name: "Add new alerts", status: false, projectId: 4},
            {id:16, name: "Call for changing the title", status: false, projectId: 4}    
        ],
    }

    //Creamos el dispatch y el state
    const [state, dispatch] = useReducer( TaskReducer, initialState );

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState;