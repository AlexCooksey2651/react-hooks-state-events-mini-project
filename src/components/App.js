import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [displayTasks, setDisplayTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function deleteTask(taskText) {
    const updatedTaskArray = displayTasks.filter(task => task.text !== taskText)
    setDisplayTasks(updatedTaskArray)
  }

  function selectCategory(updatedSelectedCategory) {
    setSelectedCategory(updatedSelectedCategory)
  }
  
  function addNewTask(newTask) {
    const newTaskArray = [...displayTasks, newTask]
    setDisplayTasks(newTaskArray)
  }

  const filteredTasksArray = displayTasks.filter(task => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory
    }
  })
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} selectCategory={selectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTasksArray} handleDelete={deleteTask}/>
    </div>
  );
}

export default App;
