
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskItems({ todo, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="task-app">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.todo}
      </p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(todo.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(todo.id)} />
      </div>
    </div>
  );
}






