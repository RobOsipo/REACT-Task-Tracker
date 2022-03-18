import React from 'react';


const Task = () => {

const [tasks, setTasks] = React.useState([
    {
        id: 1,
        text: 'code',
        reminder: true
},
{
    id: 2,
    text: 'watch anime',
    reminder: false
},
{
    id: 3,
    text: 'code sum mo',
    reminder: true
}])

    return (
        <div>
        {tasks.map((task) => {
            return <h3 key={task.id}>{task.text}</h3>
        })}
        </div>
    )
}

export default Task;