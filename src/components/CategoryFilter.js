import React from "react";

function CategoryFilter({ categories, selectedCategory, selectCategory }) {
  const categoryButtons = categories.map(category => {
    return (
      <button key={category} className={category === selectedCategory ? "selected": null} onClick={() => selectCategory(category)}>
        {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
