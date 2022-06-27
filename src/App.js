import { useState } from 'react';
import './App.css';
import data from './data.json';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState(data);

  const OnComplete = (id) => {
    console.log('task', id);

    setTasks(tasks.map((task) => {
      return task.id === Number(id) ? { ...task, completed: !task.completed } : {...task};
    }))
  };
  const OnDeleteTask = (id) => {
    setTasks([...tasks].filter(task => task.id !== id));
    
  };

  const AddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, task: newTask, completed: false }]);
  };


  return (
    <div className="container">
      <TaskForm AddTask={AddTask}/>
      <TaskList tasks = {tasks} OnComplete = {OnComplete} OnDeleteTask = {OnDeleteTask}/>
    </div>
  );
}

export default App;
