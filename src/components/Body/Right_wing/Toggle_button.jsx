// Toggle.js
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Import React icons

function Toggle({ onToggle }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (action) => {
    // Handle dropdown item click
    console.log('Dropdown item clicked:', action);
    setDropdownOpen(false);
  };

  return (
    <div className="mr-3 relative">
      <div className="absolute top-0 right-0 mt-8 bg-primary border rounded shadow-md overflow-hidden">
        <button
          onClick={handleDropdownToggle}
          className="flex items-center p-2 hover:bg-green-500"
        >
          {isDropdownOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
        {isDropdownOpen && (
          <ul className="list-none p-2">
            <li>
              <button
                onClick={() => handleDropdownItemClick('create')}
                className="w-full text-left px-2 py-1 hover:bg-green-500"
              >
                Create
              </button>
            </li>
            <li>
              <button
                onClick={() => handleDropdownItemClick('delete')}
                className="w-full text-left px-2 py-1 hover:bg-green-500"
              >
                Delete
              </button>
            </li>
            <li>
              <button
                onClick={() => handleDropdownItemClick('arrange')}
                className="w-full text-left px-2 py-1 hover:bg-green-500"
              >
                Arrange
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Toggle;
