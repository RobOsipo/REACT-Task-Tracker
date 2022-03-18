import React from "react";
import Header from "./components/Header.js"
import Tasks from "./components/Tasks.js"

// import './App.css';

function App() {
  const areYouCool = true;

  const [tasks, setTasks] = React.useState([
    {
        id: 1,
        text: 'code',
        day: "Jan 5th at 2pm",
        reminder: true
},
{
    id: 2,
    text: 'watch anime',
    day: "march 13th at 1:30pm",
    reminder: false
},
{
    id: 3,
    text: 'code sum mo',
    day: "July 17th at 10am",
    reminder: true
}])

// * This below is for deleting task 

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

  return (
    <div className="container">
     <Header title={ areYouCool ? 'Welcome to the Task Tracker App' : 'You suck, get off my app!!' } />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
