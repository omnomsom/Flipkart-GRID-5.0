import React, { useState } from "react";
import CategoryDropdown from "./Dashboard/CategoryDropdown";

const Header = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="px-8 py-4">
      <div className="flex gap-4 items-center">
        <label className="text-gray-700">Select Category:</label>
        <CategoryDropdown onSelectCategory={handleCategoryChange} />
        <input
          type="text"
          placeholder="Search"
          className=" ml-auto px-2 py-1 border border-gray-300 rounded w-1/3"
        />
      </div>
      <div>
        <p className="text-2xl font-bold">{selectedCategory}</p>
      </div>
    </div>
  );
};

export default Header;
