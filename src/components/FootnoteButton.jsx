import React, { useState, useEffect, useRef } from 'react';

export default function FootnoteButton({ number, note }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  const popoverRef = useRef();

  // Close popover if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="text-black-500 text-xs align-super ml-1 cursor-pointer"
      >
        [{number}]
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute z-50 bg-white border border-gray-300 rounded p-2 shadow-md mt-2 w-64 animate-fade-in"
        >
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-700">{note}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 ml-2 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </span>
  );
}