import React, { Fragment } from 'react';
import Task from './Task';


const TaskList = () => {

    const tasks = [
        {name: "select a platform", status: true},
        {name: "Improve css", status: false},
        {name: "Add new Form", status: true},
        {name: "Add new class for buttons", status: false}
    ]
    return ( 
        <Fragment>
            <h2>Project: Gem's store</h2>

            <ul className="tasks-list">
                {tasks.length === 0
                ? (<li className="task"><p>There's not Tasks</p></li>)
                : tasks.map(task => (
                    <Task
                        task={task}
                    />
                ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-delete"
            >Delete Project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;