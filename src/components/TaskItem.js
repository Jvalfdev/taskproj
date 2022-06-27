import React from 'react'
//import App.css
import '../App.css';

function TaskItem({task, OnComplete, OnDeleteTask}) {

    const getStyle = () => {
        return {
            textDecoration: task.completed ? 'line-through' : 'none',
            background: task.completed ? '#f4f4f4' : '#ffffff',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    };

  return (
    <div style = {getStyle()}>
        <input type='checkbox' checked={task.completed} onChange = {() => OnComplete(task.id)}/>
        {task.task}
        <button className='add-btn' onClick={() =>OnDeleteTask(task.id)}>X</button>
    </div>
  )
}

export default TaskItem