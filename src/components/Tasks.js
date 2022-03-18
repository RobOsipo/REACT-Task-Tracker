import React from 'react';
import Task from "./Task.js"

const Tasks = (props) => {

    const { tasks, onDelete, onToggle } = props;



    return (
        <div>
        {tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        })}
        </div>
    )
}

export default Tasks;


// * my comments are green here 
// ! jsbfjsf
// TODO: adgdsgf
// ? fajbfas