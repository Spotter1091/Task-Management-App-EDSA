import React from "react";
import { useState } from "react";

export default function EditTask({ editTask, todo }) {
  const [value, setValue] = useState(todo.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, todo.id);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="task-button" type="submit">
        Update Task
      </button>
    </form>
  );
}
