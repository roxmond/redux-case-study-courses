import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiBackspaceThin } from "react-icons/pi";

// Props
interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

  // Hooks
  const [query, setQuery] = useState('');

  // Handlers
    // |- Input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // |- Submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  // |- Clear
  const handleClear = () => {
    setQuery('');
    onSearch('');
  }

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