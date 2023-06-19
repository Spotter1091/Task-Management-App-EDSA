// App.jsx

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskForm from "./Components/TaskForm";
import TaskLists from "./Components/TaskList";
import EditTask from "./Components/EditTask";
import icon from "./assets/Images/icon.png"
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), todo: task, completed: false, isEditing: false },
    ]);
    console.log(tasks);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const updateTask = (todo, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, todo: todo, isEditing: !task.isEditing }
          : task
      )
    );
  };

  return (
    <div>
      <div className="wrapper">
        <div className="header">
          <h1>Save The Day! </h1>
          <img src={icon} alt="" />
        </div>
        <TaskForm addTask={addTask} />

        <TaskLists
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}
