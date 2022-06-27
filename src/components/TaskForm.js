import React, {useState} from 'react'

function TaskForm({AddTask}) {

    const [userInput, setUserInput] = useState('Text here');

    const handlerOnChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            AddTask(userInput);
            setUserInput('');
        }
    };
    

  return (
    <div style={{margin: 20}}>
        <form onSubmit={handleSubmit}>
            <input type='text' value={userInput} onChange= {handlerOnChange}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
};

export default TaskForm