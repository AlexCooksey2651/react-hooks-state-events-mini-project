import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDelete }) {
  
  const arrayOfTasks = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} handleDeleteClick={handleDelete}/>
  })
  return (
    <div className="tasks">
      {arrayOfTasks}
    </div>
  );
}

export default TaskList;
