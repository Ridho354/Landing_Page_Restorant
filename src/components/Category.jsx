// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Semua', icon: '' },
    { name: 'Makanan', icon: '' },
    { name: 'Minuman', icon: '' },
  ];

  return (
    <div className="flex gap-4 mb-8 overflow-x-auto place-content-center">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 whitespace-nowrap"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;