import Header from "./components/Header.js"
import Task from "./components/Task.js"

// import './App.css';

function App() {

  const areYouCool = true;

  return (
    <div className="container">
     <Header title={ areYouCool ? 'Welcome to the Task Tracker App' : 'You suck, get off my app!!' } />
     <Task />
    </div>
  );
}

export default App;
