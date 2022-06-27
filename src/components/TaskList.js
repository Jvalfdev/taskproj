import React from 'react'
import TaskItem from './TaskItem';

function TaskList({tasks, OnComplete, OnDeleteTask}) {
  return (
    <div>
        {
            tasks.map((task, index) => (
                <TaskItem key = {`todo-${index}`}task = {task} OnComplete = {OnComplete} OnDeleteTask = {OnDeleteTask} />              
            ))
        }
        
    </div>
  )
};

export default TaskList;