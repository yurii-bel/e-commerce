import React, { useState } from "react";

interface StoreFilterProps {
  onFilterChange: (value: string) => void;
}

const StoreFilter: React.FC<StoreFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="p-4 my-4 bg-slate-700 rounded-md shadow-md">
      <div className="flex gap-2 flex-col md:flex-row md:space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StoreFilter;
