import React from "react";
import Header from "./components/Header.js"
import Tasks from "./components/Tasks.js"
import AddTask from "./components/AddTask.js"

// import './App.css';

function App() {
  const areYouCool = true;

 
  const [showAddTask, setShowAddTask] = React.useState(true)



// ! This state is temorary, I will be changing it when I hook up a back-end
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

// * This below is for the add task functionality

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = { id, ...task}

  setTasks([...tasks, newTask]);
}

// * This below is for deletetask functionality

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

// * This below is for toggle reminder functionality

const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
}



  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title={ areYouCool ? 'Welcome to the Task Tracker App' : 'You suck, get off my app!!' } />
     { showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task to Show'}
    </div>
  );
}

export default App;
