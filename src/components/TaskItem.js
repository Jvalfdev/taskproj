import React from 'react'
//import App.css
import '../App.css';

function TaskItem({task}) {

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
        {task.task}
        <button className='add-btn'>X</button>
    </div>
  )
}

export default TaskItem