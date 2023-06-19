import React from 'react'
import { useState } from 'react';

export default function TaskForm({addTask}) {
  const[value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(value);
    setValue('')

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter new task..."
        onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="task-button" type="submit">
        Add Task
      </button>
    </form>
    
  );
}
