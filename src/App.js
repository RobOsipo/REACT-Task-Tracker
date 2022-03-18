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
    <div className="container">
     <Header title={ areYouCool ? 'Welcome to the Task Tracker App' : 'You suck, get off my app!!' } />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
