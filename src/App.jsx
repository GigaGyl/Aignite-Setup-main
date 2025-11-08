import React, { useState } from "react";
import './App.css';

function App() {
  const redish = {background: ' #cc0000'}
  const red = {background: 'red'}
  const [tasks, setTasks] = useState([
    { 
      title: 'Parade UI', 
      date: '06/11/2025', 
      time: '10.00 AM', 
      status: 'Active', 
      completed: false,
    },
    { 
      title: 'Ultah', 
      date: '10/11/2025', 
      time: '00.00 AM', 
      status: 'Active', 
      completed: false,
    }
  ]);

  const [newTask, setNewTask] = useState("");
  
  const handleInputChange = (e) => setNewTask(e.target.value);
  
  function handleAddTask() {
    if (!newTask.trim()) return;
    
    const now = new Date();
    const taskToAdd = {
      title: newTask,
      date: now.toLocaleDateString(), 
      time: now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
      status: 'Active',
      completed: false,
    };
    
    setTasks([...tasks, taskToAdd]);
    setNewTask("");
  }
  
  function handleToggleCompleted(index) {
    const updatedTask = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  }

  function handleRemoveTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  return (
    <div className='flex justify-center w-full min-h-screen bg-teal-900 text-white'>
      <header className='absolute top-0 text-xl p-5 bg-blue-900 w-full text-center rounded-lg'>
        To-Do List App
      </header>

      <main className='pt-36 w-3/4'>
        {/* User Prompt */}
        <div className='flex justify-center'>
          <input 
            className='bg-slate-700 p-4 rounded-2xl w-3/4 shadow-md' 
            placeholder='Type your text...' 
            value={newTask}
            onChange={handleInputChange}
          />
          <button className='pl-2 h-12 pt-2'>
            <img 
              src='/logo192.png' 
              alt='enter' 
              className='w-full h-full' 
              onClick={handleAddTask}
            />
          </button>
        </div>
        
        {/* Spacing */}
        <div className='p-6'>
          {/* To-Do List */}
          <div className='flex justify-center'>
            <div className='w-[85%] flex flex-col gap-y-4'>
              <hr/>
              <p className='font-semibold text-xl'>Your To-Do List</p>

              {/* Dynamic Task List (Replaces Card 1 & Card 2) */}
              {tasks.map((task, index) => (
                <div key={index} className='bg-slate-700 p-4 rounded-2xl shadow-lg'>
                  <span className='font-semibold text-2xl'>
                    {task.title}
                  </span>
                  <br />
                  <br />
                  <span className='text-base'>
                    Date: {task.date} <br />
                    Time: {task.time} <br />
                    Status: {task.completed ? 'Completed' : 'Active'} <br />
                    
                    {/* Toggle Completed Checkbox */}
                    <input 
                      type='checkbox'
                      checked={task.completed}
                      onChange={() => handleToggleCompleted(index)}
                    />
                    
                    {/* Remove Button */}
                    <input 
                      type='button' 
                      value='Remove'
                      className='ml-4 px-2 py-1 bg-red-600 rounded hover'
                      onClick={() => handleRemoveTask(index)}
                    />
                  </span>
                </div>
              ))}
              {/* End Dynamic Task List */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;