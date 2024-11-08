import React, { useEffect, useRef, useState } from 'react';


const Dropdown = ({ options, onSelect, selectedOption }:any) => {
  const dropdownRef:any = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  


  const filteredOptions = options?.filter((option:any) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputClick = () => setIsOpen(true); 
  const handleSelect = (option:any) => {
    onSelect(option);
    setIsOpen(false); 
  };

  const handleInputChange = (e:any) => setSearchQuery(e.target.value);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="relative" ref={dropdownRef} >
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none"
        onClick={handleInputClick}
        value={searchQuery || selectedOption?.label }
        onChange={handleInputChange}
      />

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md z-10">
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            ) : (
              filteredOptions.map((option:any) => (
                <li
                  key={option.value}
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
