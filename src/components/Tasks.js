import React from 'react';
import Task from "./Task.js"

const Tasks = (props) => {

    const {tasks} = props;


// * my comments are green here 
// ! jsbfjsf
// TODO: adgdsgf
// ? fajbfas



    return (
        <div>
        {tasks.map((task) => {
            return <Task key={task.id} task={task} />
        })}
        </div>
    )
}

export default Tasks;