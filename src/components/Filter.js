import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const categories = ['All', 'Produce', 'Dairy', 'Meat'];

  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;