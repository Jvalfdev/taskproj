import { useState } from 'react';
import './App.css';
import data from './data.json';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState(data);


  return (
    <div className="container">
      <TaskList tasks = {tasks}/>
    </div>
  );
}

export default App;
