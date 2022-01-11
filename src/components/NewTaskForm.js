import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[1]
  });

  function handleChangeFunction(event) {
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]: value})
    
  }

  function handleSubmitNewTask(event) {
    event.preventDefault()
    onTaskFormSubmit(formData)
  }

  const categoryOptions = categories.map(category => {
    return (category === "All" ? null : <option key={category}>{category}</option>)
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmitNewTask}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChangeFunction}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeFunction}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
