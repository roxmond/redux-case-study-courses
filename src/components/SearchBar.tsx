import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/uiSlice'; // Import the action
import { CiSearch } from "react-icons/ci";
import { PiBackspaceThin } from "react-icons/pi";


const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchQuery(query)); // Dispatch the search query
  };

  const handleClear = () => {
    setQuery('');
    dispatch(setSearchQuery('')); // Clear the search query
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row justify-center border-b border-slate-600">
      <input
        type="text"
        placeholder="Search for course..."
        value={query}
        onChange={handleInputChange}
        className="border border-slate-600 rounded-full bg-slate-600 text-slate-50 m-8 p-2 w-1/4 phones:w-1/2 tablets:w-1/2 monitors:w-1/4"
      />
      <button type="submit">
          <CiSearch className="hover-span w-8 h-auto p-2 border border-slate-600 rounded-full bg-slate-600 text-slate-50 hover:bg-slate-300 hover:text-slate-600 transition-all" />
        </button>
          
        <button onClick={handleClear}>
          <PiBackspaceThin className="hover-span w-8 h-auto p-2 ml-3 border border-slate-600 rounded-full bg-slate-600 text-slate-50 hover:bg-slate-300 hover:text-slate-600 transition-all" />
        </button>
    </form>
  );
};

export default SearchBar;
