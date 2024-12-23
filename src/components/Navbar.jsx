// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 flex-col gap-4 pb-6 pt-4 px-5 bg-sky-950 z-10">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Enigmanians Resto</div>
        <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === item.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;