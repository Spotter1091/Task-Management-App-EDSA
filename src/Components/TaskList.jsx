// TaskLists.jsx

import React from "react";
import EditTask from "./EditTask";
import TaskItems from "./TaskItems";

export default function TaskLists({
  tasks,
  toggleComplete,
  deleteTask,
  editTask,
  updateTask,
}) {
  return (
    <>
      {tasks.map((task) =>
        task.isEditing ? (
          <EditTask key={task.id} editTask={updateTask} todo={task} />
        ) : (
          <TaskItems
            key={task.id}
            todo={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      )}
    </>
  );
}
